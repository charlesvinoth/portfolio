<script setup>
// data

const menus = ["home", "skills", "experience", "projects", "contact"];

// methods

const setActiveMenu = (menu) => {
  const section = document.getElementById(menu);
  const offsetTop = section.offsetTop;
  window.scrollTo(0, offsetTop - 88);
};
</script>

<template>
  <nav class="flex items-center gap-8 relative">
    <div
      v-for="(menu, idx) in menus"
      :key="menu"
      class="relative cursor-pointer capitalize group font-semibold text-sm"
      @click="setActiveMenu(menu)"
    >
      <!-- menu -->

      <div>
        <span class="text-secondary-500 dark:text-secondary-300">
          0{{ idx + 1 }}.
        </span>
        <span
          class="ml-1 text-slate-500 dark:text-slate-400 group-hover:text-secondary-500 dark:group-hover:text-secondary-300"
        >
          {{ menu }}
        </span>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
