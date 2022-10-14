<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref();

useMotion(target, {
  initial: {
    x: -100,
    opacity: 0,
  },
  visibleOnce: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 200,
    },
  },
});
</script>

<template>
  <section ref="target" class="px-6 xl:px-8">
    <slot></slot>
  </section>
</template>

<style scoped></style>
