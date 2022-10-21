<script setup>
import { ref, computed } from "vue";
import LightBox from "@/components/light-box/LightBox.vue";

const props = defineProps({
  projectName: {
    type: String,
    default: "",
  },

  screenshotsCount: {
    type: Number,
    default: 0,
  },

  projectType: {
    type: String,
    default: "WEB",
  },
});

const isLightBoxVisible = ref(false);
const showScreenshotOnIdx = ref(0);

const screenshots = computed(() => {
  const _screenshots = [];

  for (let i = 1; i <= props.screenshotsCount; i++) {
    _screenshots.push(
      new URL(
        `/src/assets/projects/${props.projectName}/${i}.png`,
        import.meta.url
      ).href
    );
  }

  return _screenshots;
});

const showLightBox = (screenshotIdx) => {
  showScreenshotOnIdx.value = screenshotIdx;
  isLightBoxVisible.value = true;
};
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="(screenshot, idx) in screenshots"
      :key="idx"
      class="w-full grow cursor-pointer"
      :class="[
        projectType === 'MOBILE'
          ? 'md:w-1/4 md:max-w-[32%] xl:w-1/6 xl:max-w-[19.1%]'
          : 'md:w-1/3 md:max-w-[50%] xl:w-1/4 xl:max-w-[32.6%]',
      ]"
      @click="showLightBox(idx)"
    >
      <img
        :src="screenshot"
        :alt="idx"
        class="p-3 bg-slate-100 dark:bg-slate-800"
      />
    </div>
  </div>

  <LightBox
    v-model="isLightBoxVisible"
    :show-screenshot-on-idx="showScreenshotOnIdx"
    :screenshots="screenshots"
  />
</template>

<style scoped></style>
