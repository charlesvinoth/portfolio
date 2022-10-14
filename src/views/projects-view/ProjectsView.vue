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
      "SafeCheckin is a SaaS solution for the HR technology industry. It addresses common issues such as employee onboarding, flexible scheduling, micro-interaction, feedback gathering, employee self-service and happiness monitoring.",
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
    name: "Protask",
    description:
      "Protask is a digital platform that helps individuals and teams manage their tasks.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
  },
  {
    id: 10,
    name: "Safecheckin Mobile",
    description:
      "Safecheckin Mobile is the mobile version of the Safecheckin web app.",
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

    <h2 class="text-xl font-semibold mb-10 capitalize text-center">
      some noteworthy projects
    </h2>

    <div class="flex flex-wrap gap-4 xl:gap-6">
      <div
        v-for="project in otherProjects"
        :key="project.id"
        class="w-full md:w-1/3 xl:w-1/4 md:max-w-[50%] xl:max-w-[30%] grow"
      >
        <ProjectTile :project="project" />
      </div>
    </div>
  </SectionWrapper>
</template>

<style></style>
