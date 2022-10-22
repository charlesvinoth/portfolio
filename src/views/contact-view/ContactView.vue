<script setup>
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import SectionTitle from "@/components/section/SectionTitle.vue";
import ContactInfoItem from "./components/ContactInfoItem.vue";
import SectionDescription from "../../components/section/SectionDescription.vue";

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
  <SectionWrapper id="contact" style="min-height: calc(100vh - 325px)">
    <SectionTitle title="contact" />

    <SectionDescription>
      Feel free to contact me. I'm always willing to discuss new projects,
      creative ideas, or opportunities to be part of your vision.
    </SectionDescription>

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
