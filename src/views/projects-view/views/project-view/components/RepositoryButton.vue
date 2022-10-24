<script setup>
import { GithubIcon } from "@/components/Icons";
</script>

<template>
  <div
    class="w-9 h-9 sm:w-auto sm:h-auto sm:py-2 sm:pl-2 sm:pr-4 inline-flex items-center justify-center gap-2 rounded-full sm:rounded text-gray-600 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 cursor-pointer bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
  >
    <GithubIcon class="h-5 w-5" />

    <div class="font-medium capitalize hidden sm:block">repository</div>
  </div>
</template>

<style scoped></style>
