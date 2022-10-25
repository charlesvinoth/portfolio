<script setup>
import { ExternalLinkIcon } from "@/components/Icons";
</script>

<template>
  <div
    class="w-[42px] h-[42px] sm:w-auto sm:h-auto inline-flex items-center justify-center gap-2 rounded-full sm:rounded text-white cursor-pointer sm:py-2 sm:pl-2 sm:pr-4 bg-primary-500 hover:bg-primary-600"
  >
    <ExternalLinkIcon class="h-5 w-5" />

    <div class="font-medium capitalize hidden sm:block">live view</div>
  </div>
</template>

<style scoped></style>
