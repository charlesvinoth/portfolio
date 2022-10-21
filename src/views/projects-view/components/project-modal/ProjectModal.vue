<script setup>
import BackButton from "./components/BackButton.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import Technologies from "./components/Technologies.vue";
import Screenshots from "./components/Screenshots.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  project: {
    type: Object,
    default: () => {},
  },
});

const closeModal = () => emit("update:modelValue", false);
</script>

<template>
  <Teleport v-if="props.modelValue" to="body">
    <div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <div class="container mx-auto">
        <div class="min-h-[100vh] p-6 xl:p-8">
          <BackButton @click="closeModal" />

          <SectionTitle :title="props.project.name" class="mt-16" />

          <SectionDescription class="mb-16">{{
            props.project.description.long
          }}</SectionDescription>

          <div
            class="capitalize font-semibold mb-6 text-secondary-500 dark:text-secondary-400"
          >
            technologies used
          </div>

          <Technologies
            :technologies="props.project.technologies"
            class="mb-16"
          />

          <div
            class="capitalize font-semibold mb-6 text-secondary-500 dark:text-secondary-400"
          >
            screenshots
          </div>

          <Screenshots
            :project-name="props.project.name"
            :screenshotsCount="props.project.screenshotsCount"
            :project-type="props.project.type"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
