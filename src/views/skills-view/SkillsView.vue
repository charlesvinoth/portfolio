<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import SkillItem from "./components/SkillItem.vue";

const skills = {
  proficient: [
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
      label: "Vue.js",
      value: "vue",
    },
    {
      id: 5,
      label: "Quasar.js",
      value: "quasar",
    },
    {
      id: 6,
      label: "Bootstrap",
      value: "bootstrap",
    },
    {
      id: 7,
      label: "Tailwind",
      value: "tailwind",
    },
  ],
  experienced: [
    {
      id: 1,
      label: "Sass",
      value: "sass",
    },
    {
      id: 2,
      label: "React.js",
      value: "react",
    },
    {
      id: 3,
      label: "Node.js",
      value: "node",
    },
    {
      id: 4,
      label: "Nest.js",
      value: "nest",
    },
    {
      id: 5,
      label: "Dart",
      value: "dart",
    },
    {
      id: 6,
      label: "Flutter",
      value: "flutter",
    },
    {
      id: 7,
      label: "Git",
      value: "git",
    },
    {
      id: 8,
      label: "Github",
      value: "github",
    },
  ],
  familiar: [
    {
      id: 1,
      label: "jQuery",
      value: "jquery",
    },
    {
      id: 2,
      label: "PostgreSQL",
      value: "postgresql",
    },
    {
      id: 3,
      label: "Python",
      value: "python",
    },
    {
      id: 4,
      label: "Postman",
      value: "postman",
    },
    {
      id: 5,
      label: "Netlify",
      value: "netlify",
    },
    {
      id: 6,
      label: "Firebase",
      value: "firebase",
    },
    {
      id: 7,
      label: "Azure",
      value: "azure",
    },
  ],
};
</script>

<template>
  <SectionWrapper id="skills">
    <SectionTitle title="skills" />

    <SectionDescription>
      I develop a simple, intuitive, and responsive UI with cutting-edge
      technologies that allows users to do things with less effort and time.
    </SectionDescription>

    <template v-for="(value, key) in skills" :key="key">
      <div class="text-lg capitalize font-semibold mb-6">{{ key }}</div>

      <div class="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
        <SkillItem
          v-for="skill in value"
          :key="skill.id"
          :label="skill.label"
          :value="skill.value"
        />
      </div>
    </template>
  </SectionWrapper>
</template>

<style></style>
