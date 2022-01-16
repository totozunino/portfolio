<template>
  <button
    type="button"
    @click="toggleDarkMode"
    class="w-12 h-12 rounded shadow-lg bg-secondary-dark dark:bg-primary shadow-primary/25"
  >
    {{ isDarkMode ? "🌙" : "☀️" }}
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from "@/use/useDarkMode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>
