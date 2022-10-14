import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/layout/Layout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/home-view/HomeView.vue"),
        },
        {
          path: "/skills",
          name: "skills",
          component: () => import("@/views/skills-view/SkillsView.vue"),
        },
        {
          path: "/projects",
          name: "projects",
          component: () => import("@/views/projects-view/ProjectsView.vue"),
        },
        {
          path: "/timeline",
          name: "timeline",
          component: () => import("@/views/timeline-view/TimelineView.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("@/views/contact-view/ContactView.vue"),
        },
      ],
    },
  ],
});

export default router;
