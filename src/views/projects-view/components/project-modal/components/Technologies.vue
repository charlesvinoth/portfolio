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
      class="px-6 py-2 rounded border bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 font-medium"
    >
      {{ technology }}
    </div>
  </div>
</template>

<style scoped></style>
