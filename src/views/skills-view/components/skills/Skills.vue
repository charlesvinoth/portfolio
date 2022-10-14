<script setup>
import SkillItem from "../SkillItem.vue";
const programmingLanguages = [
  {
    id: 1,
    label: "JavaScript",
    value: "javascript",
  },
  {
    id: 2,
    label: "HTML",
    value: "html",
  },
  {
    id: 3,
    label: "CSS",
    value: "css",
  },
  {
    id: 4,
    label: "TypeScript",
    value: "typescript",
  },
  {
    id: 5,
    label: "Dart",
    value: "dart",
  },
  {
    id: 6,
    label: "Python",
    value: "python",
  },
];

const librariesAndFrameworks = [
  {
    id: 1,
    label: "Vue.js",
    value: "vue",
  },
  {
    id: 2,
    label: "Quasar.js",
    value: "quasar",
  },
  {
    id: 3,
    label: "Sass",
    value: "sass",
  },
  {
    id: 4,
    label: "Bootstrap",
    value: "bootstrap",
  },
  {
    id: 5,
    label: "Tailwind",
    value: "tailwind",
  },
  {
    id: 6,
    label: "Flutter",
    value: "flutter",
  },
  {
    id: 7,
    label: "React.js",
    value: "react",
  },
  {
    id: 8,
    label: "Node.js",
    value: "node",
  },
  {
    id: 9,
    label: "Nest.js",
    value: "nest",
  },
  {
    id: 9,
    label: "jQuery",
    value: "jquery",
  },
  {
    id: 10,
    label: "PostgreSQL",
    value: "postgresql",
  },
];

const toolsAndPlatforms = [
  {
    id: 1,
    label: "Git",
    value: "git",
  },
  {
    id: 2,
    label: "Github",
    value: "github",
  },
  {
    id: 3,
    label: "Postman",
    value: "postman",
  },
  {
    id: 4,
    label: "Netlify",
    value: "netlify",
  },
  {
    id: 5,
    label: "Firebase",
    value: "firebase",
  },
  {
    id: 6,
    label: "Azure",
    value: "azure",
  },
];
</script>

<template>
  <div class="capitalize font-semibold text-sm mb-6">programming languages</div>

  <div class="flex flex-wrap items-center gap-4 mb-10">
    <SkillItem
      v-for="skill in programmingLanguages"
      :key="skill.id"
      :label="skill.label"
      :value="skill.value"
    />
  </div>

  <div class="capitalize font-semibold text-sm mb-6">
    libraries & frameworks
  </div>

  <div class="flex flex-wrap items-center gap-4 mb-10">
    <SkillItem
      v-for="skill in librariesAndFrameworks"
      :key="skill.id"
      :label="skill.label"
      :value="skill.value"
    />
  </div>

  <div class="capitalize font-semibold text-sm mb-6">tools & platforms</div>

  <div class="flex flex-wrap items-center gap-4">
    <SkillItem
      v-for="skill in toolsAndPlatforms"
      :key="skill.id"
      :label="skill.label"
      :value="skill.value"
    />
  </div>
</template>

<style scoped></style>
