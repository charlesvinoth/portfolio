<script setup></script>

<template>
  <div class="w-72 md:w-80 h-72 md:h-80 relative">
    <div
      class="w-full h-full rounded-full absolute bg-primary-500 dark:bg-primary-400 circle-1"
    ></div>

    <div class="w-full h-full rounded-full absolute circle-2"></div>

    <div
      class="w-full h-full rounded-full absolute bg-secondary-500 dark:bg-secondary-400 circle-3"
    ></div>

    <div class="w-full h-full rounded-full absolute circle-4"></div>

    <div class="absolute top-0 left-0 w-full h-full rounded-full avatar-bg">
      <img src="@/assets/avatar.jpg" alt="charles" class="rounded-full" />
    </div>
  </div>
</template>

<style>
.avatar-bg {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}

.circle-1 {
  animation: morph-circle-1 12s linear infinite;
}

.circle-2 {
  top: -16px;
  left: 16px;
  animation: morph-circle-2 12s linear infinite;
}

.circle-3 {
  animation: morph-circle-3 12s linear infinite;
}

.circle-4 {
  top: 16px;
  left: -16px;
  animation: morph-circle-4 12s linear infinite;
}

@keyframes morph-circle-1 {
  0%,
  100% {
    top: -16px;
    left: -16px;
  }

  25% {
    top: -16px;
    left: 16px;
  }

  50% {
    top: 16px;
    left: 16px;
  }

  75% {
    top: 16px;
    left: -16px;
  }
}

@keyframes morph-circle-2 {
  0%,
  100% {
    border: 1px dashed var(--secondary);
  }

  50% {
    border: 1px dashed var(--primary);
  }
}

@keyframes morph-circle-3 {
  0%,
  100% {
    top: 16px;
    left: 16px;
  }

  25% {
    top: 16px;
    left: -16px;
  }

  50% {
    top: -16px;
    left: -16px;
  }

  75% {
    top: -16px;
    left: 16px;
  }
}

@keyframes morph-circle-4 {
  0%,
  100% {
    border: 1px dashed var(--primary);
  }

  50% {
    border: 1px dashed var(--secondary);
  }
}
</style>
