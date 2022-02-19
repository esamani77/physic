import { ref, Ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";
import data from "../data/data.json";
interface Lesson {
  name: string;
  description?: string;
  formulas: [];
}

interface Lessons extends Array<Lesson> {}

export const useCounter = defineStore("counter", {
  state: () => ({
    lessons: data as Lessons,
  }),
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot));
}
