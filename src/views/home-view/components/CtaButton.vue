<script setup>
import { DownloadIcon } from "@/components/Icons";

const openFile = () => {
  const link = document.createElement("a");
  link.href = "Charles Vinoth - Resume.pdf";
  link.setAttribute("download", "Charles Vinoth - Resume.pdf");
  link.style.display = "hidden";
  link.click();
};
</script>

<template>
  <button
    class="inline-flex items-center gap-3 pl-6 pr-5 py-3 capitalize tracking-wide font-medium text-white rounded bg-primary-500 hover:bg-primary-600"
    @click="openFile"
  >
    <span> get resume </span>

    <div class="h-6 w-6">
      <DownloadIcon />
    </div>
  </button>
</template>

<style scoped></style>
