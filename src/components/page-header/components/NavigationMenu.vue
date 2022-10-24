<script setup>
import { useMainStore } from "@/stores/main.js";
import { ref, computed } from "vue";
import { MenuIcon, CloseIcon } from "@/components/Icons";

// data

const store = useMainStore();
const menus = ["home", "skills", "experience", "projects", "contact"];
const showMenus = ref(false);

// computed

const activeMenu = computed(() => store.activeMenu);

// methods

const toggleMenus = () => (showMenus.value = !showMenus.value);
const setActiveMenu = (menu) => {
  store.setActiveMenu(menu);
  showMenus.value = false;
  const section = document.getElementById(menu);
  const offsetTop = section.offsetTop;
  window.scrollTo(0, offsetTop - 88);
};
</script>

<template>
  <div
    class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-center"
    @click="toggleMenus"
  >
    <CloseIcon v-if="showMenus" class="h-6 w-6" />
    <MenuIcon v-else class="h-6 w-6" />

    <Teleport to="body">
      <div
        class="fixed top-[88px] w-screen bg-white dark:bg-gray-900 transition-[right] duration-200 ease-linear"
        :class="[showMenus ? 'right-0' : 'right-[-110%]']"
        style="height: calc(100vh - 88px)"
      >
        <div class="container mx-auto px-6 py-8 xl:px-8">
          <nav class="flex flex-col gap-8 relative">
            <div
              v-for="menu in menus"
              :key="menu"
              class="relative cursor-pointer capitalize font-semibold text-sm"
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

              <!-- ... -->
            </div>
          </nav>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
