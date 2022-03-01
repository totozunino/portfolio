<template>
  <header id="home" class="flex items-center justify-between px-6 py-2 sm:py-6 sm:px-20 dark:bg-secondary-dark">
    <img alt="Vue logo" class="logo" src="@/assets/images/logo.png" width="75" height="75" />
    <ThemeToggler />
  </header>
</template>

<script setup lang="ts">
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>

<style scoped></style>
