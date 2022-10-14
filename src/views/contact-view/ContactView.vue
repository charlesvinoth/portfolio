<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ContactInfoItem from "./components/ContactInfoItem.vue";

const contactInfo = [
  {
    id: 1,
    type: "EMAIL",
    info: "charlezvinoth@gmail.com",
  },
  {
    id: 2,
    type: "PHONE",
    info: "+91-7010034120",
  },
  {
    id: 3,
    type: "GITHUB",
    info: "https://github.com/charlesvinoth",
  },
  {
    id: 4,
    type: "LOCATION",
    info: "Tirunelveli, Tamilnadu, India",
  },
];
</script>

<template>
  <SectionWrapper
    id="contact"
    class="flex flex-col justify-center py-16"
    style="min-height: calc(100vh - 88px)"
  >
    <SectionTitle title="05. contact" />

    <p class="text-slate-500 dark:text-slate-400 mb-10">
      Feel free to contact me. I'm always willing to discuss new projects,
      creative ideas, or opportunities to be part of your vision.
    </p>

    <div class="space-y-6">
      <ContactInfoItem
        v-for="item in contactInfo"
        :key="item.id"
        :type="item.type"
        :info="item.info"
      />
    </div>
  </SectionWrapper>
</template>

<style></style>
