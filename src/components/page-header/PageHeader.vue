<script setup>
import Logo from "./components/Logo.vue";
import NavigationMenuXL from "./components/NavigationMenuXL.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
</script>

<template>
  <header
    class="sticky top-0 left-0 z-10 px-6 py-6 xl:px-8 flex items-center justify-between bg-white dark:bg-slate-900"
  >
    <Logo />

    <div class="grow"></div>

    <NavigationMenuXL class="hidden xl:flex" />

    <ThemeToggle class="ml-8" />

    <NavigationMenu class="ml-4 xl:hidden" />
  </header>
</template>

<style scoped></style>
