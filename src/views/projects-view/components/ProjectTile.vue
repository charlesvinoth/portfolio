<script setup>
import Button from "@/components/Button.vue";
import { RightArrowIcon } from "@/components/Icons";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div
    class="relative rounded overflow-hidden p-4 bg-primary-500/5 dark:bg-primary-400/10 group cursor-pointer"
  >
    <img src="@/assets/projects/3.png" alt="hero" />

    <div
      class="absolute left-0 bottom-0 w-full h-0 bg-primary-500 dark:bg-primary-400 transition-[height] duration-300 ease-in-out group-hover:h-full flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 class="text-lg font-bold text-white mb-6">
        {{ props.project.name }}
      </h2>

      <Button label="know more" color="SECONDARY">
        <RightArrowIcon />
      </Button>
    </div>
  </div>
</template>

<style></style>
