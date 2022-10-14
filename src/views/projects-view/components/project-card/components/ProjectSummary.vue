<script setup>
import { RightArrowIcon } from "@/components/Icons";
import Button from "@/components/Button.vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col items-center md:items-start">
    <h2 class="text-xl font-bold mb-5">{{ props.name }}</h2>

    <p
      class="text-slate-500 dark:text-slate-400 mb-10 text-center md:text-left"
    >
      {{ props.description }}
    </p>

    <Button label="know more" color="SECONDARY">
      <RightArrowIcon />
    </Button>
  </div>
</template>

<style></style>
