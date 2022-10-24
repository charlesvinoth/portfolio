<script setup>
import PageHeader from "@/components/page-header/PageHeader.vue";
import HomeView from "@/views/home-view/HomeView.vue";
import SkillsView from "@/views/skills-view/SkillsView.vue";
import ExperienceView from "@/views/experience-view/ExperienceView.vue";
import ProjectsView from "@/views/projects-view/ProjectsView.vue";
import ContactView from "@/views/contact-view/ContactView.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <PageHeader />

  <HomeView />

  <SkillsView />

  <ExperienceView />

  <ProjectsView />

  <ContactView />

  <PageFooter />
</template>

<style scoped></style>
