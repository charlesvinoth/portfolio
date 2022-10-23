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
    period: "sep 2021 - present",
    roles: [
      "Designed and built modern, scalable, responsive, distributed cloud-based applications using HTML, CSS, Sass, JavaScript, TypeScript, Vue.js, Vuex, VueRouter, Quasar.js, etc.",
      "Delivered complex UX/UI components without compromising quality and speed.",
      "Designed and developed Dashboard and Report pages using JavaScript data visualization libraries like D3.js, Chart.js, ApexCharts.js, and HighCharts.js.",
      "Led a team of 2 developers through building multiple Vue.js and React.js applications.",
      "Built and shipped robust apps to Android/iOS devices using Dart and Flutter.",
      "Experienced in working with IIS web servers, Netlify and Azure, and Firebase.",
      "Introduced and used Postman to create, share, test, and document APIs.",
      "Collaborated with teams of engineers, designers, managers, clients, and stakeholders on a daily basis.",
    ],

    isCollapsed: false,
  },
  {
    id: 2,
    jobTitle: "front-end developer",
    company: "ezofis",
    period: "sep 2019 - aug 2021",
    roles: [
      "Written modern, performant, and robust code for a diverse array of client and internal projects.",
      "Worked with a variety of different languages, and frameworks, such as HTML, CSS, JavaScript (ES6+), TypeScript, React.js, Vue.js, Node.js, jQuery, etc.",
      "Crafted a solid design system to enforce consistency across the application.",
      "Translated designs and wireframes into a highly responsive user interface and reusable components using React.js and Vue.js.",
      "Introduced and enforced healthy codebases, coding styles, and standards.",
      "Interfaced with clients on a weekly basis, providing technological expertise and knowledge.",
      "Analyzed business requirements, and participated in technical design, development, and testing of various modules assigned.",
    ],
    isCollapsed: true,
  },
  {
    id: 3,
    jobTitle: "junior front-end developer",
    company: "ezofis",
    period: "nov 2018 - aug 2019",
    roles: [
      "Conceptualized, designed and developed several apps using HTML, CSS, Sass, JavaScript (ES6+), TypeScript, React.js, Vue.js, etc.",
      "Reduced the bundle size of many apps by removing the dead and unused code.",
      "Removed jQuery and several other jQuery plugins and replaced them with vanilla JavaScript, which increased the application speed by 50%.",
      "Worked with CSS background, CSS Layouts, CSS positioning, CSS text, CSS border, CSS margin, CSS padding, Pseudo elements, and CSS behaviors.",
      "Communicated effectively with project managers and the team to complete projects on time and deliver to clients accordingly.",
      "Consumed Node.js and .NET APIs, filtered and processed data, and displayed information based on that.",
      "Introduced and used Git and GitHub to manage the source code.",
      "Replaced XML with JSON as API payload which increased the application speed by 20%.",
    ],
    isCollapsed: true,
  },
  {
    id: 4,
    jobTitle: "front-end developer trainee",
    company: "ezofis",
    period: "apr 2018 - oct 2018",
    roles: [
      "Worked on major bug fixes, which included UI issues and functionality issues as well.",
      "Involved in web designing using HTML, CSS, and JavaScript and extensively used CSS Flexbox for positioning.",
      "Used advanced JavaScript concepts to validate input fields using regular expression.",
      "Made the web pages Responsive using jQuery UI and bootstrap, which can be operated on both PC and Mobile.",
      "Built web pages that are more user-interactive using jQuery plugins for Drag and Drop, Auto Complete, JSON, jQuery, JavaScript, and Bootstrap.",
      "Developed page layouts, navigations and presented designs and concepts to the clients and the management review.",
    ],
    isCollapsed: true,
  },
]);
</script>

<template>
  <SectionWrapper id="experience">
    <SectionTitle title="experience" />

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
