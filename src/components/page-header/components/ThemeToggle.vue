<script setup>
import { useMainStore } from "@/stores/main.js";
import { computed } from "vue";
import { SunIcon, MoonIcon } from "@/components/Icons";

const store = useMainStore();
const darkTheme = computed(() => store.darkTheme);
const toggleTheme = store.toggleTheme;
</script>

<template>
  <div
    class="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-orange-400 dark:text-amber-200 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 relative overflow-hidden"
    @click="toggleTheme"
  >
    <SunIcon class="h-6 w-6 absolute" :class="[darkTheme ? 'set' : 'rise']" />
    <MoonIcon class="h-6 w-6 absolute" :class="[darkTheme ? 'rise' : 'set']" />
  </div>
</template>

<style scoped>
.rise {
  animation: rise 0.3s linear;
  animation-fill-mode: forwards;
}

.set {
  animation: set 0.3s linear;
  animation-fill-mode: forwards;
}

@keyframes rise {
  from {
    left: -24px;
    bottom: -24px;
  }

  to {
    left: 8px;
    bottom: 8px;
  }
}

@keyframes set {
  from {
    left: 8px;
    bottom: 8px;
  }

  to {
    left: 40px;
    bottom: -24px;
  }
}
</style>
