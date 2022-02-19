<template>
  <div class="bg-gray-100 rounded-xl p-8">
    <p class="text-lg font-semibold">
      {{ item.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
