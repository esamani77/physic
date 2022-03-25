<template>
  <div class="bg-gray-100 rounded-xl p-8">
    <h4 class="text-lg font-semibold">
      {{ item.name }}
    </h4>
    <p class="text-md mt-1 font-semibold">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
<style></style>
