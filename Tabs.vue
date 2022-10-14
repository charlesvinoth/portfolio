<script setup>
import { ref } from "vue";

// data

const tabs = [
  "programming languages",
  "libraries & frameworks",
  "tools & platforms",
];
const tabRefs = ref([]);
const indicatorLeftPos = ref(0);
const indicatorWidth = ref(214);
const activeTab = ref("programming languages");

// methods

const setActiveTab = (_tab, _tabIdx) => {
  activeTab.value = _tab;

  const tabRef = tabRefs.value[_tabIdx];
  const offsetLeft = tabRef.offsetLeft;
  const offsetWidth = tabRef.offsetWidth;

  indicatorLeftPos.value = offsetLeft;
  indicatorWidth.value = offsetWidth;
};
</script>

<template>
  <div class="flex items-center gap-4 relative">
    <div
      v-for="(tab, idx) in tabs"
      :key="tab"
      ref="tabRefs"
      class="relative cursor-pointer"
      @click="setActiveTab(tab, idx)"
    >
      <!-- tab -->

      <div
        class="capitalize"
        :class="[
          activeTab === tab
            ? 'text-slate-800 font-semibold'
            : 'text-slate-500 dark:text-slate-400',
        ]"
      >
        {{ tab }}
      </div>

      <!-- ... -->
    </div>
  </div>
</template>

<style scoped></style>
