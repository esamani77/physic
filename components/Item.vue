<template>
  <div class="bg-gray-100 rounded-xl p-8 relative">
    <h3 class="text-lg font-bold">
      {{ item.name }}
    </h3>
    <p class="text-md mt-1 font-semibold">
      {{ item.title }}
    </p>
    <img
      @click="navigate(index)"
      class="arrow-left"
      src="./../assets/icons/arrow.png"
    />
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  methods: {
    navigate(index) {
      this.$router.push(`./${index}`);
    },
  },
};
</script>
<style scoped>
.arrow-left {
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 10px;
  left: 20px;
}
</style>
