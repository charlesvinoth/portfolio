<script setup>
const props = defineProps({
  roles: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul
    class="space-y-2 list-disc list-inside marker:text-primary-500 dark:marker:text-primary-500"
  >
    <li v-for="role in props.roles" :key="role">
      {{ role }}
    </li>
  </ul>
</template>

<style scoped></style>
