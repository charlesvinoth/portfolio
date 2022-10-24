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
        class="group-hover:text-gray-900 dark:group-hover:text-gray-50"
        :class="[
          activeMenu === menu
            ? 'text-secondary-500 dark:text-secondary-500'
            : 'text-gray-500 dark:text-gray-400',
        ]"
      >
        {{ menu }}
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
