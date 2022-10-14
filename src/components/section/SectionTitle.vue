<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <h1 class="flex items-center mb-5">
    <div class="w-12 h-[2px] mr-4 bg-primary-500 dark:bg-primary-300"></div>
    <div
      class="text-2xl font-bold capitalize text-primary-500 dark:text-primary-300"
    >
      {{ props.title }}
    </div>
  </h1>
</template>

<style scoped></style>
