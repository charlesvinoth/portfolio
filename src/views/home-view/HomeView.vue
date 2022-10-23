<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import SectionDescription from "@/components/section/SectionDescription.vue";
import Designation from "./components/Designation.vue";
import { DownloadIcon } from "@/components/Icons";
import Avatar from "./components/Avatar.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <SectionWrapper
    id="home"
    class="flex items-center relative my-0"
    style="min-height: calc(100vh - 88px)"
  >
    <div class="flex flex-col xl:flex-row items-center gap-14 xl:mb-8">
      <div class="xl:order-1 xl:mr-3">
        <Avatar />
      </div>

      <div class="text-center xl:text-left">
        <SectionTitle
          class="justify-center xl:justify-start !text-xl"
          title="Hi, I'm Charles Vinoth."
        />

        <Designation />

        <SectionDescription class="w-full xl:w-4/5">
          Front-end developer with more than 4 years of experience designing and
          developing responsive web and mobile applications. Proficient in HTML,
          CSS, and JavaScript frameworks with a thorough understanding of UI and
          UX. Notable accomplishments include an 80% increase in the sales of an
          existing product through improved design and code.
        </SectionDescription>

        <Button label="get resume">
          <DownloadIcon />
        </Button>
      </div>
    </div>

    <div
      class="invisible xl:visible absolute bottom-0 mb-8 w-7 h-11 border-2 border-slate-400 dark:border-slate-600 rounded-2xl before:absolute before:content-[''] before:left-[10px] before:w-1 before:h-2 before:rounded before:bg-slate-400 dark:before:bg-slate-600 scroll"
    ></div>
  </SectionWrapper>
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
