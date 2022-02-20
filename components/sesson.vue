<template>
  <div class="bg-gray-100 rounded-xl p-8">
    <p class="text-lg font-semibold text-right">
      {{ store.lessons[index].name }}
    </p>
  </div>
  <div class="text-right m-5" dir="rtl">
    <div
      class="border-gray-500"
      v-for="formula in store.lessons[index].formulas"
      :key="formula.name"
    >
      <h4>
        {{ formula.name }}
      </h4>
      <div class="mt-5" v-for="(param, idx) in formula.params[0]" :key="param">
        <label :for="param"> {{ idx }} :</label>
        <input
          :id="param"
          type="text"
          class="
            mt-1
            block
            w-full
            px-3
            py-2
            bg-white
            border border-slate-300
            rounded-md
            text-sm
            shadow-sm
            placeholder-slate-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            disabled:bg-slate-50
            disabled:text-slate-500
            disabled:border-slate-200
            disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
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
  },
};
</script>

<style></style>
