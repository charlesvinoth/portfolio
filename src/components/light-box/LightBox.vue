<script setup>
import { ref, watchEffect } from "vue";
import { CloseIcon, PreviousIcon, NextIcon } from "@/components/Icons";

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

const activeIdx = ref(0);

watchEffect(
  () => (activeIdx.value = props.showScreenshotOnIdx),
  [props.showScreenshotOnIdx]
);

const closeLightBox = () => emit("update:modelValue", false);

const previous = () => {
  if (activeIdx.value === 1) return;
  activeIdx.value -= 1;
};

const next = () => {
  if (activeIdx.value === props.screenshots.length) return;
  activeIdx.value += 1;
};
</script>

<template>
  <Teleport v-if="props.modelValue" to="body">
    <div
      class="fixed top-0 left-0 h-screen w-screen bg-slate-900/70 dark:bg-slate-500/70"
    >
      <CloseIcon
        class="h-6 w-6 text-slate-50 cursor-pointer fixed top-0 right-0 mt-4 mr-4"
        @click="closeLightBox"
      />

      <div class="flex items-center justify-center w-full h-full">
        <div class="w-4/5 lg:w-3/5">
          <img :src="screenshots[activeIdx - 1]" class="w-full h-auto" />

          <div
            class="flex items-center justify-between text-sm text-slate-50 mt-4"
          >
            <div
              class="flex items-center gap-2 cursor-pointer hover:underline"
              @click="previous"
            >
              <PreviousIcon class="h-5 w-5" />
              <div class="capitalize">prev</div>
            </div>

            <div class="text-sm">
              {{ activeIdx }} of {{ screenshots.length }}
            </div>

            <div
              class="flex items-center gap-2 cursor-pointer hover:underline"
              @click="next"
            >
              <div class="capitalize">next</div>
              <NextIcon class="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
