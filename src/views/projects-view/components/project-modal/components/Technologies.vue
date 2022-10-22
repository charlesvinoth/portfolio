<script setup>
const props = defineProps({
  technologies: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <div
      v-for="technology in props.technologies"
      :key="technology"
      class="px-6 py-2 rounded bg-secondary-600/10 text-secondary-600 dark:bg-secondary-400/10 dark:text-secondary-300 font-medium"
    >
      {{ technology }}
    </div>
  </div>
</template>

<style scoped></style>
