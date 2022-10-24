<script setup>
import { ref, watchEffect } from "vue";
import VueEasyLightbox, { useEasyLightbox } from "vue-easy-lightbox";
import {
  ZoomInIcon,
  ZoomOutIcon,
  RotateRightIcon,
  RotateLeftIcon,
} from "@/components/Icons";
import ActionButton from "./components/ActionButton.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  screenshots: {
    type: Array,
    default: () => [],
  },

  showScreenshotOnIdx: {
    type: Number,
    value: 0,
  },
});

const { changeIndex, indexRef, imgsRef } = useEasyLightbox({
  imgs: props.screenshots,
  initIndex: props.showScreenshotOnIdx,
});
const activeIdx = ref(0);

watchEffect(() => changeIndex(props.showScreenshotOnIdx), [props.modelValue]);

const closeLightBox = () => emit("update:modelValue", false);
</script>

<template>
  <VueEasyLightbox
    :visible="modelValue"
    :imgs="imgsRef"
    :index="indexRef"
    teleport="body"
    :mask-closable="false"
    @hide="closeLightBox"
    @on-index-change="(_, newIdx) => (activeIdx = newIdx)"
  >
    <template #toolbar="{ zoomIn, zoomOut, rotateLeft, rotateRight }">
      <div
        class="fixed bottom-8 rounded flex items-center overflow-hidden bg-[#2d2d2d]"
        style="left: calc(50% - 120px)"
      >
        <ActionButton @click="zoomIn">
          <ZoomInIcon class="h-5 w-5" />
        </ActionButton>

        <ActionButton @click="zoomOut">
          <ZoomOutIcon class="h-5 w-5" />
        </ActionButton>

        <div class="text-sm text-gray-50 mx-4">
          {{ activeIdx + 1 }} of {{ screenshots.length }}
        </div>

        <ActionButton @click="rotateRight">
          <RotateRightIcon class="h-5 w-5" />
        </ActionButton>

        <ActionButton @click="rotateLeft">
          <RotateLeftIcon class="h-5 w-5" />
        </ActionButton>
      </div>
    </template>
  </VueEasyLightbox>
</template>

<style scoped></style>
