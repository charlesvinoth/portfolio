<script setup>
import { computed } from "vue";
import { useMainStore } from "@/stores/main.js";

const store = useMainStore();
const experiences = computed(() => store.experience);
</script>

<template>
  <div v-for="experience in experiences" :key="experience.id" class="">
    <div class="mb-8">
      <h2 class="font-bold">
        <!-- job title -->

        <span class="capitalize"> {{ experience.jobTitle }}</span>

        <!-- ... -->

        <!-- company -->

        <span class="text-blue-500"> @ {{ experience.company }} </span>

        <!-- ... -->
      </h2>

      <!-- duration -->

      <div class="capitalize text-gray-500 dark:text-gray-400 text-sm mt-1">
        {{ experience.period }}
      </div>

      <!-- ... -->

      <!-- roles -->

      <ul class="mt-4 space-y-1 list-disc marker:text-blue-500">
        <li
          v-for="role in experience.roles"
          :key="role"
          class="text-sm text-gray-700"
        >
          {{ role }}
        </li>
      </ul>

      <!-- ... -->
    </div>
  </div>
</template>

<style></style>
