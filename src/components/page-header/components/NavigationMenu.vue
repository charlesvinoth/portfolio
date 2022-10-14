<script setup>
import { ref } from "vue";
import { MenuIcon, CloseIcon } from "@/components/Icons";

// data

const menus = ["home", "skills", "experience", "projects", "contact"];
const showMenus = ref(false);

// methods

const toggleMenus = () => (showMenus.value = !showMenus.value);
const setActiveMenu = (menu) => {
  showMenus.value = false;
  const section = document.getElementById(menu);
  const offsetTop = section.offsetTop;
  window.scrollTo(0, offsetTop - 88);
};
</script>

<template>
  <div
    class="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex items-center justify-center"
    @click="toggleMenus"
  >
    <CloseIcon v-if="showMenus" class="h-6 w-6" />
    <MenuIcon v-else class="h-6 w-6" />

    <Teleport to="body">
      <div
        class="fixed top-[88px] w-screen bg-white dark:bg-slate-900 transition-[right] duration-200 ease-linear"
        :class="[showMenus ? 'right-0' : 'right-[-110%]']"
        style="height: calc(100vh - 88px)"
      >
        <div class="container mx-auto px-6 py-8 xl:px-8">
          <nav class="flex flex-col gap-8 relative">
            <div
              v-for="(menu, idx) in menus"
              :key="menu"
              class="relative cursor-pointer capitalize font-semibold text-sm"
              @click="setActiveMenu(menu)"
            >
              <!-- menu -->

              <div>
                <span class="text-secondary-500 dark:text-secondary-400">
                  0{{ idx + 1 }}.
                </span>
                <span
                  class="ml-1 text-slate-500 dark:text-slate-400 group-hover:text-secondary-500 dark:group-hover:text-secondary-400"
                >
                  {{ menu }}
                </span>
              </div>

              <!-- ... -->
            </div>
          </nav>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
