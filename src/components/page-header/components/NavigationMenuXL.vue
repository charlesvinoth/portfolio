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
      class="relative cursor-pointer capitalize group font-semibold text-sm"
      @click="setActiveMenu(menu)"
    >
      <!-- menu -->

      <div
        class="group-hover:text-secondary-500 dark:group-hover:text-secondary-400"
        :class="[
          activeMenu === menu
            ? 'text-secondary-500 dark:text-secondary-400'
            : 'text-slate-500 dark:text-slate-400',
        ]"
      >
        {{ menu }}
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
