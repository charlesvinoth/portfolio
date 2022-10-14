<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "label",
  },

  color: {
    type: String,
    default: "PRIMARY",
  },
});
</script>

<template>
  <button
    class="inline-flex items-center px-6 py-3 shadow-sm capitalize tracking-wider font-medium text-white rounded"
    :class="[
      props.color === 'SECONDARY'
        ? 'bg-secondary-500 dark:bg-secondary-400 hover:bg-secondary-600 dark:hover:bg-secondary-500'
        : 'bg-primary-500 dark:bg-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500',
    ]"
  >
    {{ props.label }}

    <div class="h-6 w-6 text-white ml-3">
      <slot></slot>
    </div>
  </button>
</template>

<style scoped></style>
