<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="relative rounded overflow-hidden group cursor-pointer">
    <div class="p-2 bg-primary-500/10 dark:bg-primary-400/20">
      <img src="@/assets/projects/3.png" alt="hero" />
    </div>

    <h2
      class="text-md font-semibold mt-6 mb-3 text-center group-hover:underline group-hover:text-secondary-500 dark:group-hover:text-secondary-400"
    >
      {{ props.project.name }}
    </h2>

    <p class="text-sm text-slate-500 dark:text-slate-400 text-center">
      {{ props.project.description }}
    </p>
  </div>
</template>

<style></style>
