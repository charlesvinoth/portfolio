import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/views/Views.vue"),
    },
    {
      path: "/project/:id",
      name: "project",
      props: (route) => ({ projectId: Number(route.params.id) }),
      component: () =>
        import("@/views/projects-view/views/project-view/ProjectView.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/resume-view/ResumeView.vue"),
    },
  ],
});

export default router;
