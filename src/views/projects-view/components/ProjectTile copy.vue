<script setup>
import { ref, computed, watchEffect } from "vue";
import ProjectModal from "./project-modal/ProjectModal.vue";

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
  <div class="group cursor-pointer text-center" @click="showModal">
    <img
      :src="coverImg"
      :alt="props.project.name"
      class="p-3 border border-gray-200 dark:bg-gray-800"
    />

    <h2
      class="text-md font-bold mt-6 mb-1 group-hover:underline group-hover:text-primary-500 dark:group-hover:text-primary-500"
    >
      {{ props.project.name }}
    </h2>

    <p class="text-sm text-gray-500 dark:text-gray-400">
      {{ props.project.description.short }}
    </p>
  </div>

  <ProjectModal v-model="isModalVisible" :project="props.project" />
</template>

<style></style>
