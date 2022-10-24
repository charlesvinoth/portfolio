<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/stores/main.js";
import BackButton from "./components/BackButton.vue";
import RepositoryButton from "./components/RepositoryButton.vue";
import LivePreviewButton from "./components/LivePreviewButton.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import Technologies from "./components/Technologies.vue";
import Screenshots from "./components/Screenshots.vue";

window.scrollTo({ top: 0, behavior: "auto" });

const props = defineProps({
  projectId: {
    type: Number,
    default: 0,
  },
});

const store = useMainStore();
const router = useRouter();

const project = computed(() =>
  store.projects.find((project) => project.id === props.projectId)
);

const goBack = () => router.back();
</script>

<template>
  <div class="px-6 xl:px-8 py-8">
    <div class="flex items-center justify-between mb-16">
      <BackButton class="" @click="goBack" />

      <div class="flex gap-3">
        <RepositoryButton />
        <LivePreviewButton />
      </div>
    </div>

    <SectionTitle :title="project.name" />

    <SectionDescription class="mb-16">{{
      project.description.long
    }}</SectionDescription>

    <div class="text-lg capitalize font-bold mb-6">technologies used</div>

    <Technologies :technologies="project.technologies" class="mb-16" />

    <div class="text-lg capitalize font-bold mb-6">screenshots</div>

    <Screenshots
      :project-name="project.name"
      :screenshotsCount="project.screenshotsCount"
      :project-type="project.type"
    />
  </div>
</template>

<style scoped></style>
