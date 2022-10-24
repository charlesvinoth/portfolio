<script setup>
import Logo from "./components/Logo.vue";
import NavigationMenuXL from "./components/NavigationMenuXL.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
</script>

<template>
  <header
    class="sticky top-0 left-0 z-10 px-6 xl:px-8 bg-white dark:bg-gray-900"
  >
    <div
      class="py-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800"
    >
      <Logo />

      <div class="grow"></div>

      <NavigationMenuXL class="hidden xl:flex" />

      <ThemeToggle class="ml-12" />

      <NavigationMenu class="ml-4 xl:hidden" />
    </div>
  </header>
</template>

<style scoped></style>
