<script setup>
const props = defineProps({
  technologies: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <div
      v-for="technology in props.technologies"
      :key="technology"
      class="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-700"
    >
      {{ technology }}
    </div>
  </div>
</template>

<style scoped></style>
