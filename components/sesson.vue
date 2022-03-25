<template>
  <div class="bg-gray-100 rounded-xl p-8">
    <h3 class="text-lg font-semibold text-right">
      {{ store.lessons[index].name }}
    </h3>
    <p class="text-md font-semibold text-right">
      {{ store.lessons[index].description }}
    </p>
  </div>
  <div class="text-right m-5" dir="rtl">
    <div
      class="border-gray-500"
      v-for="(formula, formulaIndex) in store.lessons[index].formulas"
      :key="formula.name"
    >
      <h4>
        {{ formula.name }}
      </h4>
      <p>{{ formula.formula.replaceAll(/var/g, "") }}</p>
      <div class="mt-5" v-for="(param, idx) in inputs[formulaIndex]" :key="idx">
        <label :for="param.key">{{ param.key.replace("var", "") }}: </label>
        <input
          type="number"
          :name="param.key"
          :id="param.key"
          v-model="param.value"
          class="border border-gray-300 bg-orange-200"
        />
      </div>
      <button
        @click="calculate(formulaIndex)"
        class="border border-gray-500 bg-red-200 p-4 m-4"
      >
        محاسبه {{ formula.result }}
      </button>
    </div>
  </div>
</template>

<script>
import { evaluate, log } from "mathjs";
import { useCounter } from "@/store";
export default {
  data() {
    return {
      store: useCounter(),
    };
  },
  computed: {
    index() {
      return parseFloat(this.$route.params.id - 1) || 0;
    },
    inputs() {
      let data = this.store.lessons[this.index].formulas,
        inputs = [];
      data.forEach((el, foreachIndex) => {
        let specialFormula = el.formula,
          regex = new RegExp(/var/gm);
        inputs.push({});
        for (let idx in specialFormula) {
          let index = parseInt(idx);
          let word =
            specialFormula[index] +
            specialFormula[index + 1] +
            specialFormula[index + 2];

          if (regex.test(word)) {
            let key = word + specialFormula[index + 3];
            inputs[foreachIndex] = { ...inputs[foreachIndex], [key]: "" };
          }
        }
      });
      let formuls = [];
      inputs.forEach((el, idx) => {
        formuls.push([]);
        for (let key in el) {
          formuls[idx].push({ key: key, value: 1 });
        }
      });
      return formuls;
    },
  },

  methods: {
    calculate(formulaIndex) {
      let data = this.store.lessons[this.index].formulas[formulaIndex];
      let result = data.formula;
      this.inputs[formulaIndex].forEach((el) => {
        result = result.replaceAll(el.key, el.value);
      });
      data.result = evaluate(result);
    },
  },
};
</script>

<style></style>
