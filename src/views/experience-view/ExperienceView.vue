<script setup>
import { computed } from "vue";
import { useMainStore } from "@/stores/main.js";
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import ExperienceItem from "./components/ExperienceItem.vue";

const store = useMainStore();
const experiences = computed(() => store.experience);
</script>

<template>
  <SectionWrapper id="experience">
    <SectionTitle title="experience" class="text-indigo-500" />

    <SectionDescription>
      I have been developing sites and applications for four years and am
      familiar with major trends and directions of modern design. I am a trusted
      developer you will get the decent outcome you expect.
    </SectionDescription>

    <ExperienceItem
      v-for="experience in experiences"
      :key="experience.id"
      v-bind="experience"
      @toggleRoles="experience.isCollapsed = !experience.isCollapsed"
    />
  </SectionWrapper>
</template>

<style></style>
