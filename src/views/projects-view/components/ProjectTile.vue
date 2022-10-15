<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});

const coverImg = computed(
  () =>
    new URL(
      `/src/assets/projects/${props.project.name}/cover.png`,
      import.meta.url
    ).href
);
</script>

<template>
  <div class="group cursor-pointer text-center">
    <img
      :src="coverImg"
      :alt="props.project.name"
      class="p-3 bg-slate-100 dark:bg-slate-800"
    />

    <h2
      class="text-md font-semibold mt-6 mb-2 group-hover:underline group-hover:text-secondary-500 dark:group-hover:text-secondary-400"
    >
      {{ props.project.name }}
    </h2>

    <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
      {{ props.project.description }}
    </p>
  </div>
</template>

<style></style>
