<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const technologies = ["React", "Node", "Vue", "Flutter", "Javascript (ES6+)", "HTML & (S)CSS"];
const showMoreContent = ref(false);

const afterEnter = () => (showMoreContent.value = true);

const goToSection = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section class="flex flex-col items-center min-h-screen p-4 text-center">
    <Transition name="fade" appear @after-enter="afterEnter">
      <div>
        <h1 class="my-10 text-3xl sm:text-6xl">&lt; Mathias Zunino /></h1>
        <div>
          <p class="max-w-lg text-lg">
            Hello! I'm Mathias, a Full Stack Developer based in Canelones, UY. I enjoy coding and creating whether that
            be applications, websites, or anything in between.
          </p>
          <div class="hidden sm:block">
            <p class="my-5 text-lg">Technologies I've been working with recently:</p>
            <ul class="grid ml-28 w-fit">
              <li v-for="tech in technologies" :key="tech" class="w-fit marker:text-primary">
                <span>{{ tech }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="bounce" appear>
      <div v-show="showMoreContent" class="flex flex-col items-center">
        <div
          class="box-content w-48 h-48 mt-10 bg-center bg-no-repeat bg-cover border-2 rounded-full shadow-lg dark:shadow-primary/25 bg-avatar"
        />
        <hr class="w-full max-w-sm my-5 sm:max-w-xl" />
        <div class="flex-wrap items-center hidden mt-5 space-x-4 sm:flex">
          <RouterLink
            to="/"
            active-class="active"
            @click="goToSection('home')"
            class="px-4 py-2 uppercase transition-colors duration-200 rounded hover:bg-primary/20 hover:text-primary"
            >Home</RouterLink
          >
          <RouterLink
            :to="{ hash: '#work' }"
            active-class="active"
            @click="goToSection('work')"
            class="px-4 py-2 uppercase transition-colors duration-200 rounded hover:bg-primary/20 hover:text-primary"
            >Work</RouterLink
          >
          <RouterLink
            :to="{ hash: '#projects' }"
            active-class="active"
            @click="goToSection('projects')"
            class="px-4 py-2 uppercase transition-colors duration-200 rounded hover:bg-primary/20 hover:text-primary"
            >Projects</RouterLink
          >
          <RouterLink
            :to="{ hash: '#contact' }"
            active-class="active"
            @click="goToSection('contact')"
            class="px-4 py-2 uppercase transition-colors duration-200 rounded hover:bg-primary/20 hover:text-primary"
            >Contact</RouterLink
          >
        </div>
      </div>
    </Transition>
  </section>
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

ul {
  grid-template-columns: repeat(2, minmax(140px, 200px));
}

li {
  list-style-type: square;
}
</style>
