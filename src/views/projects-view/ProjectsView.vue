<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ProjectCard from "./components/project-card/ProjectCard.vue";
import ProjectTile from "./components/ProjectTile.vue";

const projects = [
  {
    id: 1,
    name: "ezofis Enterprise",
    description:
      "ezofis Enterprise is an Enterprise Content Management (ECM) software that enables an enterprise-scale organization to intelligently store, organize, and retrieve the organization's content.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 2,
    name: "ezofis Business",
    description:
      "ezofis Business is a Document Management System (DMS) software for organizing, securing, capturing, digitizing, tagging, approving, and completing tasks with business files.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 3,
    name: "ezofis Business Mobile",
    description:
      "ezofis Business Mobile is the mobile version of the ezofis Business web application.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 4,
    name: "Safecheckin",
    description:
      "SafeCheckin is a SaaS solution for employee onboarding, interview scheduling, feedback gathering, etc.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 5,
    name: "Documently",
    description:
      "Documently is an AI-driven SaaS platform that enables document gathering and client onboarding at its best.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 6,
    name: "Eterno Forms",
    description:
      "Eterno Forms is a feature-rich web application for creating and managing forms.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 7,
    name: "Sathiyam Oils",
    description:
      "Sathiyam Oils is an eCommerce mobile app for cold pressed oils.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 8,
    name: "ezofis Design System",
    description: "Reusable components and patterns library.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 9,
    name: "Safecheckin Mobile",
    description:
      "Safecheckin Mobile is the mobile version of the Safecheckin web app.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 10,
    name: "Miscellaneous",
    description:
      "Screenshots from various applications and prototypes that I worked.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
];
const otherProjects = projects.slice(3);
</script>

<template>
  <SectionWrapper
    id="projects"
    class="flex flex-col py-16"
    style="min-height: calc(100vh - 88px)"
  >
    <SectionTitle title="04. projects" />

    <p class="text-slate-500 dark:text-slate-400 mb-16">
      We develop the best quality website that serves for the long-term.
      Well-documented, clean, easy and elegant interface helps any non-technical
      clients.
    </p>

    <ProjectCard :project="projects[0]" />

    <ProjectCard :project="projects[1]" image-position="RIGHT" class="my-16" />

    <ProjectCard :project="projects[2]" class="mb-20" />

    <div class="mb-12 relative border-b border-slate-200 dark:border-slate-800">
      <div
        class="absolute top-[-10px] text-sm font-medium capitalize text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-4"
        style="left: calc(50% - 106px)"
      >
        other noteworthy projects
      </div>
    </div>

    <div class="flex flex-wrap gap-x-4 gap-y-8 xl:gap-x-6 xl:gap-y-12">
      <div
        v-for="project in otherProjects"
        :key="project.id"
        class="w-full md:w-1/3 md:max-w-[50%] xl:w-1/4 xl:max-w-[32.26%] grow"
      >
        <ProjectTile :project="project" />
      </div>
    </div>
  </SectionWrapper>
</template>

<style></style>
