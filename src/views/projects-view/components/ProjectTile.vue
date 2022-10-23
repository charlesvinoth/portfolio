<script setup>
import { ref, computed, watchEffect } from "vue";
import ProjectModal from "./project-modal/ProjectModal.vue";
import { RightIcon } from "@/components/Icons";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});

const isModalVisible = ref(false);
const offsetTop = ref(0);

const coverImg = computed(
  () =>
    new URL(
      `/src/assets/projects/${props.project.name}/cover.png`,
      import.meta.url
    ).href
);

watchEffect(() => {
  if (isModalVisible.value) {
    document.querySelector("#app").style.display = "none";
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  document.querySelector("#app").style.display = "initial";
  window.scrollTo({ top: offsetTop.value - 104, behavior: "smooth" });
}, [isModalVisible]);

const showModal = (e) => {
  offsetTop.value = e.target.parentElement.offsetTop;
  isModalVisible.value = true;
};
</script>

<template>
  <div
    class="h-full rounded border border-slate-200 dark:border-slate-700 group cursor-pointer"
    @click="showModal"
  >
    <img
      :src="coverImg"
      :alt="props.project.name"
      class="p-4 bg-slate-200 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700"
    />

    <div class="px-4 py-6 flex items-center justify-between gap-10">
      <div>
        <h2 class="text-md font-bold mb-1">
          {{ props.project.name }}
        </h2>

        <p class="text-sm text-slate-500 dark:text-slate-400">
          {{ props.project.description.short }}
        </p>
      </div>

      <div
        class="flex items-center justify-center h-9 w-9 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-secondary-500 dark:group-hover:bg-secondary-400"
      >
        <RightIcon
          class="h-5 w-5 min-w-[36px] text-slate-500 dark:text-slate-300 group-hover:text-white"
        />
      </div>
    </div>
  </div>

  <ProjectModal v-model="isModalVisible" :project="props.project" />
</template>

<style></style>
