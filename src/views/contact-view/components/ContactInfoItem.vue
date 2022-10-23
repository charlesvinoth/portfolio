<script setup>
import {
  EmailIcon,
  PhoneIcon,
  GithubIcon,
  LocationIcon,
} from "@/components/icons";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },

  info: {
    type: String,
    default: "",
  },
});

const iconMap = {
  EMAIL: EmailIcon,
  PHONE: PhoneIcon,
  GITHUB: GithubIcon,
  LOCATION: LocationIcon,
};
</script>

<template>
  <div class="flex items-center">
    <component
      :is="iconMap[props.type]"
      class="mr-6 h-6 w-6 text-secondary-500 dark:text-secondary-500"
    />

    <div class="text-md font-medium">
      <a
        v-if="props.type === 'EMAIL'"
        :href="`mailto:${props.info}`"
        class="'cursor-pointer hover:underline hover:text-secondary-500 dark:hoverdark:text-secondary-500'"
      >
        {{ props.info }}
      </a>
      <a
        v-else-if="props.type === 'PHONE'"
        :href="`tel:${props.info}`"
        class="'cursor-pointer hover:underline hover:text-secondary-500 dark:hoverdark:text-secondary-500'"
      >
        {{ props.info }}
      </a>
      <a
        v-else-if="props.type === 'GITHUB'"
        :href="props.info"
        target="_blank"
        class="'cursor-pointer hover:underline hover:text-secondary-500 dark:hoverdark:text-secondary-500'"
      >
        {{ props.info }}
      </a>
      <span v-else>{{ props.info }}</span>
    </div>
  </div>
</template>

<style scoped></style>
