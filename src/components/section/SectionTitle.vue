<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <h1 class="text-2xl flex items-center mb-4 font-semibold">
    <div class="w-9 h-[2px] mr-4 bg-secondary-500"></div>
    <div class="capitalize text-secondary-500">
      {{ props.title }}
    </div>
  </h1>
</template>

<style scoped></style>
