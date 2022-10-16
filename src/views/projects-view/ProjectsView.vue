<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ProjectTile from "./components/ProjectTile.vue";
import SectionDescription from "../../components/section/SectionDescription.vue";

const projects = [
  {
    id: 1,
    name: "ezofis Enterprise",
    description: "SaaS platform for Enterprise Content Management (ECM).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 2,
    name: "ezofis Business",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [
      "Conceptualized, designed, and developed the entire front-end of the application",
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "Vue.js",
      "Quasar.js",
      "Axios.js",
      "Vuex",
      "VueRouter",
      "Vuelidate",
      "Konva.js",
    ],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 3,
    name: "ezofis Business Mobile",
    description: "Mobile version of the ezofis Business web application.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 4,
    name: "Eterno Forms",
    description: "SaaS platform for creating and managing forms.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 5,
    name: "Sathiyam Oils",
    description: "eCommerce mobile app for cold pressed oils.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 6,
    name: "ezofis Design System",
    description: "Reusable components and patterns library.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
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
    screenshotsCount: 12,
  },
  {
    id: 8,
    name: "Safecheckin Mobile",
    description: "Mobile version of the Safecheckin web app.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 9,
    name: "Documently",
    description: "SaaS platform for document gathering and client onboarding.",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 10,
    name: "ezofis Business v2 Prototype 1",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
  },
  {
    id: 11,
    name: "ezofis Business v2 Prototype 2",
    description: "SaaS platform for Document Management System (DMS).",
    roles: [],
    technologies: [],
    link: "",
    repository: "",
    screenshotsCount: 12,
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
    screenshotsCount: 12,
  },
];
</script>

<template>
  <SectionWrapper id="projects">
    <SectionTitle title="04. projects" />

    <SectionDescription>
      I've worked on a handful of customer projects, personal projects and
      prototypes over the past four years, which are well documented, clean,
      user-friendly and scalable, regardless of the stack.
    </SectionDescription>

    <div class="flex flex-wrap gap-x-4 gap-y-12 xl:gap-x-6 xl:gap-y-18">
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
