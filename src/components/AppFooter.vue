<script setup lang="ts">
import IconGithub from "@/components/icons/IconGithub.vue";
import IconGitlab from "@/components/icons/IconGitlab.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import { RouterLink } from "vue-router";

const goToSection = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <footer class="grid w-full text-white place-items-center h-80 pa-6 bg-[#212121]">
    <div class="my-2 text-center">
      <p class="mb-2 text-xl text-center">Navigate</p>
      <RouterLink :to="{ hash: '#home' }" @click="goToSection('home')" class="px-4">Home</RouterLink>
      <RouterLink :to="{ hash: '#work' }" @click="goToSection('work')" class="px-4">Work</RouterLink>
      <RouterLink :to="{ hash: '#projects' }" @click="goToSection('projects')" class="px-4">Projects</RouterLink>
      <RouterLink :to="{ hash: '#contact' }" @click="goToSection('contact')" class="px-4">Contact</RouterLink>
      <p class="mt-4 mb-0 text-xl text-center">Social</p>
      <div class="flex justify-center mt-2 space-x-4">
        <a href="https://www.linkedin.com/in/mathias-zunino-5531021a3/" target="_blank">
          <IconLinkedin />
        </a>
        <a href="https://gitlab.com/totoz" target="_blank">
          <IconGitlab />
        </a>
        <a href="https://github.com/totozunino" target="_blank">
          <IconGithub />
        </a>
      </div>
    </div>
    <hr class="w-full" />
    <p class="pt-4 mb-1">Designed by @totoz - {{ new Date().getFullYear() }}</p>
    <p style="opacity: 0.6" class="mb-0">Made with</p>
    <img src="@/assets/images/vue-logo.png" alt="Vue Logo" width="42" />
  </footer>
</template>

<style scoped>
hr {
  border-color: #bababa24;
  border-top-width: 1px;
}
</style>
