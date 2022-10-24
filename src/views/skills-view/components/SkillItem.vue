<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },

  value: {
    type: String,
    default: "",
  },
});

const logo = computed(
  () => new URL(`/src/assets/skills/${props.value}.svg`, import.meta.url).href
);
</script>

<template>
  <div
    class="h-28 w-28 flex flex-col items-center justify-center gap-4 rounded border border-gray-200 dark:border-gray-800"
  >
    <img :src="logo" :alt="props.label" class="w-10 h-auto" />

    <div class="text-sm text-gray-500 dark:text-gray-400">
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped></style>
