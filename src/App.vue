<script setup>
import PageHeader from "@/components/page-header/PageHeader.vue";
import HomeView from "@/views/home-view/HomeView.vue";
import SkillsView from "@/views/skills-view/SkillsView.vue";
import ExperienceView from "@/views/experience-view/ExperienceView.vue";
import ProjectsView from "@/views/projects-view/ProjectsView.vue";
import ContactView from "@/views/contact-view/ContactView.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<template>
  <div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50">
    <div class="container mx-auto">
      <PageHeader />

      <HomeView />

      <SkillsView />

      <ExperienceView />

      <ProjectsView />

      <ContactView />

      <PageFooter />
    </div>
  </div>
</template>

<style scoped></style>
