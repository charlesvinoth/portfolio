<script setup>
import { onMounted } from "vue";
import { useMainStore } from "@/stores/main.js";

const store = useMainStore();

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          store.setActiveMenu(entry.target.id);
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(document.getElementById("home"));
  observer.observe(document.getElementById("skills"));
  observer.observe(document.getElementById("experience"));
  observer.observe(document.getElementById("projects"));
  observer.observe(document.getElementById("contact"));
});
</script>

<template>
  <section class="px-6 xl:px-8 my-32 py-8">
    <slot></slot>
  </section>
</template>

<style scoped></style>
