<script setup>
import { ref } from "vue";
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import ExperienceItem from "./components/ExperienceItem.vue";

const experiences = ref([
  {
    id: 1,
    jobTitle: "senior front-end developer",
    company: "ezofis",
    period: "jun 2022 - present",
    roles: [
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],

    isCollapsed: false,
  },
  {
    id: 2,
    jobTitle: "front-end developer - cloud",
    company: "ezofis",
    period: "sep 2020 - may 2022",
    roles: [
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],

    isCollapsed: true,
  },
  {
    id: 3,
    jobTitle: "front-end developer",
    company: "ezofis",
    period: "sep 2019 - aug 2020",
    roles: [
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],
    isCollapsed: true,
  },
  {
    id: 4,
    jobTitle: "junior front-end developer",
    company: "ezofis",
    period: "nov 2018 - aug 2019",
    roles: [
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],
    isCollapsed: true,
  },
  {
    id: 5,
    jobTitle: "front-end developer trainee",
    company: "ezofis",
    period: "apr 2018 - oct 2018",
    roles: [
      "Write modern, performant, and robust code for a diverse array of client and internal projects",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge",
      "Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis",
    ],
    isCollapsed: true,
  },
]);
</script>

<template>
  <SectionWrapper
    id="experience"
    class="flex flex-col justify-center py-16"
    style="min-height: calc(100vh - 88px)"
  >
    <SectionTitle title="03. experience" />

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
