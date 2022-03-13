<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AnimatedBackground from "@/components/AnimatedBackground.vue";
import AppFooter from "@/components/AppFooter.vue";
import HamburgerButton from "@/components/HamburgerButton.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

const showDrawer = ref(false);

watch(showDrawer, (showDrawer) => {
  if (showDrawer) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
});
</script>

<template>
  <AppHeader>
    <HamburgerButton :show-drawer="showDrawer" @toggle="() => (showDrawer = !showDrawer)" />
  </AppHeader>
  <main class="relative w-full h-full min-h-screen">
    <AnimatedBackground :class="{ 'z-50': showDrawer }" />
    <RouterView />
  </main>
  <transition name="slide-fade">
    <NavigationDrawer v-if="showDrawer" @toggle="() => (showDrawer = !showDrawer)" />
  </transition>
  <AppFooter />
</template>

<style>
@import "@/assets/base.css";

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
