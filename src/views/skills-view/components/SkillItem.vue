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
  <div class="flex flex-col items-center">
    <div
      class="h-20 w-20 rounded flex items-center justify-center border border-slate-200 dark:border-slate-800"
    >
      <img :src="logo" :alt="props.label" class="w-9 h-auto" />
    </div>

    <div class="text-sm mt-2">
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped></style>
