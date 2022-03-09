<script setup lang="ts">
import { RouterLink } from "vue-router";
import ThemeToggler from "@/components/ThemeToggler.vue";

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const goToSection = (section: string) => {
  emit("toggle");
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <aside class="absolute top-0 left-0 z-30 w-full h-full" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div class="h-screen">
      <ul class="flex flex-col items-center justify-center h-full space-y-12 dark:text-slate-100">
        <ThemeToggler class="absolute top-10 left-10" />
        <li class="text-5xl uppercase transition-transform hover:scale-105">
          <RouterLink to="/" @click="goToSection('home')">Home</RouterLink>
        </li>
        <li class="text-5xl uppercase transition-transform hover:scale-105">
          <RouterLink :to="{ hash: '#work' }" @click="goToSection('work')">Work</RouterLink>
        </li>
        <li class="text-5xl uppercase transition-transform hover:scale-105">
          <RouterLink :to="{ hash: '#projects' }" @click="goToSection('projects')">Projects</RouterLink>
        </li>
        <li class="text-5xl uppercase transition-transform hover:scale-105">
          <RouterLink :to="{ hash: '#contact' }" @click="goToSection('contact')">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
aside {
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(1rem);
}
</style>
