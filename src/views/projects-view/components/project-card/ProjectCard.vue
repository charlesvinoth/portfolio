<script setup>
import ProjectHero from "./components/ProjectHero.vue";
import ProjectSummary from "./components/ProjectSummary.vue";

const props = defineProps({
  imagePosition: {
    type: String,
    default: "LEFT",
  },

  project: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div
    class="w-full flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20"
  >
    <ProjectHero
      class="basis-1/2"
      :class="[
        props.imagePosition === 'RIGHT' ? 'md:order-last' : 'md:order-first',
      ]"
    />

    <ProjectSummary
      :name="props.project.name"
      :description="props.project.description"
      class="basis-1/2"
    />
  </div>
</template>

<style></style>
