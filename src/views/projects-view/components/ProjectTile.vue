<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { RightIcon } from "@/components/Icons";

const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

const coverImg = computed(
  () =>
    new URL(
      `/src/assets/projects/${props.project.name}/cover.png`,
      import.meta.url
    ).href
);

const showProject = () =>
  router.push({ name: "project", params: { id: props.project.id } });
</script>

<template>
  <div
    class="h-full rounded border border-gray-200 dark:border-gray-700 group cursor-pointer"
    @click="showProject"
  >
    <img
      :src="coverImg"
      :alt="props.project.name"
      class="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
    />

    <div class="px-4 py-6 flex items-center justify-between gap-10">
      <div>
        <h2 class="text-md font-bold mb-1">
          {{ props.project.name }}
        </h2>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ props.project.description.short }}
        </p>
      </div>

      <div
        class="flex items-center justify-center h-9 w-9 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-secondary-500 dark:group-hover:bg-secondary-400"
      >
        <RightIcon
          class="h-5 w-5 min-w-[36px] text-gray-500 dark:text-gray-300 group-hover:text-white"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
