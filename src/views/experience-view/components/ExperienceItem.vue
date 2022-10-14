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
    class="pb-6 mb-6 border-b last:border-b-0 border-slate-200 dark:border-slate-800"
  >
    <h2 class="text-base md:text-md relative pl-12">
      <!-- toggle -->

      <div
        class="absolute left-0 top-0 h-full flex items-center justify-center"
      >
        <div
          class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center cursor-pointer"
          @click="toggleRoles"
        >
          <div class="w-4 h-4 text-secondary-500 dark:text-secondary-400">
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

      <span class="font-semibold text-secondary-500 dark:text-secondary-300">
        @ {{ props.company }}
      </span>

      <!-- ... -->
    </h2>

    <!-- duration -->

    <div
      class="pl-12 capitalize text-slate-500 dark:text-slate-400 text-sm mt-1"
    >
      {{ props.period }}
    </div>

    <!-- ... -->

    <!-- roles -->

    <div
      class="overflow-hidden transition-[height] duration-300 ease-in-out"
      :style="{ height: props.isCollapsed ? '0px' : `${rolesHeight + 24}px` }"
    >
      <ul
        ref="rolesRef"
        class="mt-6 space-y-2 pl-12 list-disc list-inside marker:text-secondary-500 dark:marker:text-secondary-400"
      >
        <li v-for="role in props.roles" :key="role">
          {{ role }}
        </li>
      </ul>
    </div>

    <!-- ... -->
  </div>
</template>

<style>
li::marker {
  content: "▸ ";
}
</style>
