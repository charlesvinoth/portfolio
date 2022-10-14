<script setup>
import { useMainStore } from "@/stores/main.js";
import { computed } from "vue";

const store = useMainStore();
const darkTheme = computed(() => store.darkTheme);
const logo = computed(
  () =>
    new URL(
      `/src/assets/logo/${darkTheme.value ? "dark" : "light"}.svg`,
      import.meta.url
    ).href
);
</script>

<template>
  <img :src="logo" alt="logo" class="h-10" />
</template>

<style scoped></style>
