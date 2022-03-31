<template>
  <div class="bg-gray-100 p-8">
    <h3 class="text-lg font-semibold text-right">
      {{ store.lessons[index].name }} - {{ store.lessons[index].title }}
    </h3>
    <p class="text-md font-semibold text-right">
      {{ store.lessons[index].description }}
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-right m-5" dir="rtl">
    <div
      class="bg-gray-100 my-5 p-10 rounded-xl"
      v-for="(formula, formulaIndex) in store.lessons[index].formulas"
      :key="formula.name"
    >
      <h4 class="text-lg mb-4">
        {{ formula.name }}
      </h4>
      <p class="italic oldstyle-nums font-black">
        فرمول : <span dir="ltr >  {{ formula.formula.replaceAll(/var/g, "") }} </span>
      </p>
      <div
        class="mt-5 w-full"
        v-for="(param, idx) in inputs[formulaIndex]"
        :key="idx"
      >
        <label class="w-1/12" :for="param.key"
          >{{ param.key.replace("var", "") }}:
        </label>
        <input
          type="number"
          :name="param.key"
          :id="param.key"
          v-model="param.value"
          class="border border-gray-300 bg-orange-200 p-2 rounded w-full"
        />
      </div>
      <button
        @click="calculate(formulaIndex)"
        class="bg-blue-200 p-4 my-5 rounded-xl w-full"
      >
        محاسبه
      </button>
      <div class="text-center oldstyle-nums font-black text-2xl underline">
        {{ formula.result }}
      </div>
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
      return parseFloat(this.$route.params.id) || 0;
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
