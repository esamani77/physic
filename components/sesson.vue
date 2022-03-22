<template>
  <div class="bg-gray-100 rounded-xl p-8">
    <p class="text-lg font-semibold text-right">
      {{ inputs }}
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
      <div class="mt-5" v-for="(param, idx) in inputs[formulaIndex]" :key="idx">
        <label :for="param.key">{{ param.key }}</label>
        <input
          type="number"
          :name="param.key"
          :id="param.key"
          v-model="param.value"
          class="border border-gray-300 bg-orange-200"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      console.log(data);
      data.forEach((el, foreachIndex) => {
        console.log(foreachIndex, el.formula);
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
      console.log(inputs);
      let formuls = [];
      inputs.forEach((el, idx) => {
        formuls.push([]);
        for (let key in el) {
          formuls[idx].push({ key: key, value: "" });
        }
      });
      return formuls;
    },
  },
};
</script>

<style></style>
