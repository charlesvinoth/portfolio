<script setup>
import Name from "./components/Name.vue";
import Designation from "./components/Designation.vue";
import Description from "./components/Description.vue";
import { DownloadIcon } from "@/components/Icons";
import Avatar from "./components/Avatar.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <div
    id="home"
    class="flex items-center relative px-6 xl:px-8 py-8"
    style="height: calc(100vh - 88px)"
  >
    <div class="flex flex-col xl:flex-row items-center gap-14 xl:mb-8">
      <div class="xl:order-1 xl:mr-3">
        <Avatar />
      </div>

      <div class="text-center xl:text-left">
        <Name />

        <Designation />

        <Description />

        <Button label="get resume">
          <DownloadIcon />
        </Button>
      </div>
    </div>

    <div
      class="invisible xl:visible absolute bottom-0 my-6 w-7 h-11 border-2 border-slate-400 dark:border-slate-600 rounded-2xl before:absolute before:content-[''] before:left-[10px] before:w-1 before:h-2 before:rounded before:bg-slate-400 dark:before:bg-slate-600 scroll"
    ></div>
  </div>
</template>

<style scoped>
.scroll::before {
  animation: scroll 1.3s infinite;
}

@keyframes scroll {
  from {
    top: 4px;
    opacity: 1;
  }

  to {
    top: 36px;
    opacity: 0;
  }
}
</style>
