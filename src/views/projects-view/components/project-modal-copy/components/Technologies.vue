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
      class="px-6 py-2 rounded bg-primary-500/10 text-primary-500 dark:bg-primary-500/10 dark:text-primary-300 font-medium"
    >
      {{ technology }}
    </div>
  </div>
</template>

<style scoped></style>
