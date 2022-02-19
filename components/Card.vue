<template>
  <div class="flex flex-row-reverse flex-wrap w-full">
    <div v-for="item in store.lessons" :key="item" class="mt-8 w-4/12 px-2">
      <Item dir="rtl" class="" :item="item"></Item>
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
};
</script>

<style></style>
