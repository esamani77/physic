<template>
  <div class="bg-gray-100 rounded-xl p-8 relative">
    <h3 class="text-lg font-bold">
      {{ item.name }}
    </h3>
    <p class="text-md mt-1 font-semibold">
      {{ item.title }}
    </p>

    <span class="icon" @click="navigate(index)">
      <svg viewBox="0 0 500 500">
        <path
          d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z"
        ></path>
      </svg>
    </span>
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
