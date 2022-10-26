<script setup>
import { EmailIcon, PhoneIcon, HomeIcon, GithubIcon } from "@/components/icons";
import Experience from "./components/Experience.vue";

const contactItems = [
  {
    id: 1,
    icon: EmailIcon,
    label: "charlezvinoth@gmail.com",
  },
  {
    id: 2,
    icon: PhoneIcon,
    label: "+917010034120",
  },
  {
    id: 3,
    icon: HomeIcon,
    label: "charlesvinoth.com",
  },
  {
    id: 4,
    icon: GithubIcon,
    label: "github.com/charlesvinoth",
  },
];
</script>

<template>
  <div class="page mx-auto">
    <div class="text-xl font-semibold mb-2 pl-[2px]">Charles Vinoth</div>
    <div class="text-5xl font-bold tracking-tight text-blue-500 mb-6">
      Front-End Developer
    </div>

    <div class="flex items-center justify-between bg-gray-100 p-2 mb-9">
      <div
        v-for="item in contactItems"
        :key="item.id"
        class="flex items-center gap-2"
      >
        <component :is="item.icon" class="h-4 w-4 text-gray-600" />
        <div class="text-sm leading-none font-medium">{{ item.label }}</div>
      </div>
    </div>

    <div class="">
      <div class="text-xl font-medium text-blue-500 mb-4">Experience</div>

      <Experience />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 21cm;
  min-height: 29.7cm;
}
</style>
