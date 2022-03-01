<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AnimatedBackground from "@/components/AnimatedBackground.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <AppHeader />
  <main class="relative w-full h-full">
    <AnimatedBackground />
    <RouterView />
    <Footer />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
