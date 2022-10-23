<script setup>
import { useMainStore } from "@/stores/main.js";
import { computed } from "vue";

// data

const store = useMainStore();
const menus = ["home", "skills", "experience", "projects", "contact"];

// computed

const activeMenu = computed(() => store.activeMenu);

// methods

const setActiveMenu = (menu) => {
  store.setActiveMenu(menu);

  const section = document.getElementById(menu);
  const offsetTop = section.offsetTop;
  window.scrollTo(0, offsetTop - 88);
};
</script>

<template>
  <nav class="flex items-center gap-8 relative">
    <div
      v-for="menu in menus"
      :key="menu"
      class="relative cursor-pointer capitalize group font-medium"
      @click="setActiveMenu(menu)"
    >
      <!-- menu -->

      <div
        class="group-hover:text-slate-900 dark:group-hover:text-slate-50"
        :class="[
          activeMenu === menu
            ? 'text-secondary-500 dark:text-secondary-500'
            : 'text-slate-500 dark:text-slate-400',
        ]"
      >
        {{ menu }}
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
