<script setup lang="ts">
import HomeSection from "@/components/HomeSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import WorkSection from "@/components/WorkSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>

<template>
  <HomeSection />

  <WorkSection />

  <ProjectsSection />

  <ContactSection />
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.active {
  @apply bg-primary/20 text-primary;
}

.roll-in-left-enter-from,
.roll-in-left-leave-to {
  transform: translateX(-500px) rotate(-200deg);
  opacity: 0;
}

.roll-in-left-enter-active,
.roll-in-left-leave-active {
  transition: transform 0.5s, opacity 0.7s;
}

ul {
  grid-template-columns: repeat(2, minmax(140px, 200px));
}

li {
  list-style-type: square;
}
</style>
