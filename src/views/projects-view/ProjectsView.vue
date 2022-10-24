<script setup>
import { computed } from "vue";
import { useMainStore } from "@/stores/main.js";
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ProjectTile from "./components/ProjectTile.vue";
import SectionDescription from "../../components/section/SectionDescription.vue";

const store = useMainStore();
const projects = computed(() => store.projects);
</script>

<template>
  <SectionWrapper id="projects">
    <SectionTitle title="projects" />

    <SectionDescription>
      I've worked on a handful of customer projects, personal projects and
      prototypes over the past four years, which are well documented, clean,
      user-friendly and scalable, regardless of the stack.
    </SectionDescription>

    <div class="flex flex-wrap gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-full md:w-1/3 md:max-w-[50%] xl:w-1/4 grow"
      >
        <ProjectTile :project="project" />
      </div>
    </div>
  </SectionWrapper>
</template>

<style></style>
