<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ProjectTile from "./components/ProjectTile.vue";

const projects = [
  {
    id: 1,
    name: "ezofis Enterprise",
    description: "SaaS platform for Enterprise Content Management (ECM).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 2,
    name: "ezofis Business",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 3,
    name: "ezofis Business Mobile",
    description: "Mobile version of the ezofis Business web application.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 4,
    name: "Eterno Forms",
    description: "SaaS platform for creating and managing forms.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 5,
    name: "Sathiyam Oils",
    description: "eCommerce mobile app for cold pressed oils.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 6,
    name: "ezofis Design System",
    description: "Reusable components and patterns library.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 7,
    name: "Safecheckin",
    description:
      "SaaS platform for employee onboarding, interview scheduling, etc.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 8,
    name: "Safecheckin Mobile",
    description: "Mobile version of the Safecheckin web app.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 9,
    name: "Documently",
    description: "SaaS platform for document gathering and client onboarding.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 10,
    name: "ezofis Business v2 Prototype 1",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 11,
    name: "ezofis Business v2 Prototype 2",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 12,
    name: "Miscellaneous",
    description:
      "Screenshots from various applications and prototypes that I worked.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
];
</script>

<template>
  <SectionWrapper
    id="projects"
    class="flex flex-col py-16"
    style="min-height: calc(100vh - 88px)"
  >
    <SectionTitle title="04. projects" />

    <p class="text-slate-500 dark:text-slate-400 mb-10">
      We develop the best quality website that serves for the long-term.
      Well-documented, clean, easy and elegant interface helps any non-technical
      clients.
    </p>

    <div class="flex flex-wrap gap-4 xl:gap-6">
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
