<script setup>
import { ExpandIcon, CollapseIcon } from "@/components/Icons";
import { ref, computed } from "vue";

const props = defineProps({
  jobTitle: {
    type: String,
    default: "",
  },

  company: {
    type: String,
    default: "",
  },

  period: {
    type: String,
    default: "",
  },

  roles: {
    type: Array,
    default: () => [],
  },

  isCollapsed: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["toggleRoles"]);

const rolesRef = ref();
const rolesHeight = computed(() => rolesRef.value?.offsetHeight || 0);

const toggleRoles = () => emit("toggleRoles");
</script>

<template>
  <div
    class="pb-6 mb-6 border-b last:border-b-0 border-gray-200 dark:border-gray-800"
  >
    <h2 class="text-lg md:text-md relative pl-12">
      <!-- toggle -->

      <div
        class="absolute left-0 top-0 h-full flex items-center justify-center"
      >
        <div
          class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center cursor-pointer"
          @click="toggleRoles"
        >
          <div class="w-4 h-4 text-secondary-500">
            <ExpandIcon v-if="props.isCollapsed" />
            <CollapseIcon v-else />
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- job title -->

      <span class="capitalize font-semibold">
        {{ props.jobTitle }}
      </span>

      <!-- ... -->

      <!-- company -->

      <span class="font-semibold text-secondary-500">
        @ {{ props.company }}
      </span>

      <!-- ... -->
    </h2>

    <!-- duration -->

    <div class="pl-12 capitalize text-gray-500 dark:text-gray-400 text-sm mt-1">
      {{ props.period }}
    </div>

    <!-- ... -->

    <!-- roles -->

    <div
      class="overflow-hidden transition-[height] duration-300 ease-in-out"
      :style="{ height: props.isCollapsed ? '0px' : `${rolesHeight + 32}px` }"
    >
      <ul
        ref="rolesRef"
        class="mt-8 space-y-3 pl-12 list-disc list-inside marker:text-secondary-500"
      >
        <li
          v-for="role in props.roles"
          :key="role"
          class="text-gray-500 dark:text-gray-400"
        >
          {{ role }}
        </li>
      </ul>
    </div>

    <!-- ... -->
  </div>
</template>

<style scoped></style>
