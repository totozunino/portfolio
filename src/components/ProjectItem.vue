<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "vue";
import IconGithub from "@/components/icons/IconGithub.vue";

interface Technology {
  name: string;
  img: string;
}

interface ProjectItemProps {
  title: string;
  technologies: Technology[];
  description: string;
  leftAnimation: string;
  rightAnimation: string;
  ltr: boolean;
  img: string;
  source: string;
  url: string;
  imgClasses: string;
  disableOverlay: boolean;
}

const props = withDefaults(defineProps<ProjectItemProps>(), {
  ltr: true,
  disableOverlay: false,
  imgClasses: "",
});

const target = ref(null);
const targetIsVisible = ref(false);
const showImageOverlay = ref(false);

useIntersectionObserver(target, ([{ isIntersecting }], obvserver) => {
  if (isIntersecting) obvserver.disconnect();
  targetIsVisible.value = isIntersecting;
});
</script>

<template>
  <div
    :class="`${!props.ltr ? 'sm:flex-row-reverse' : ''} h-[450px] items-center flex flex-col sm:flex-row mt-16 sm:mt-0`"
    ref="target"
  >
    <Transition :name="props.leftAnimation">
      <div
        class="relative z-10 flex items-center justify-center w-full transition-transform sm:w-1/2 hover:scale-105"
        v-show="targetIsVisible"
        @mouseenter="showImageOverlay = true"
        @mouseleave="showImageOverlay = false"
      >
        <div class="relative">
          <img
            :src="props.img"
            :alt="props.title"
            class="sm:max-h-[450px] border rounded shadow-lg cursor-pointer dark:border-stone-600 shadow-primary/25"
            :class="props.imgClasses"
          />
          <div
            v-show="showImageOverlay"
            class="absolute top-0 left-0 flex items-center justify-center w-full h-full space-y-4"
            :class="disableOverlay ? '' : 'bg-black/40'"
          >
            <a v-if="props.url" :href="props.url" target="_blank" class="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-white"
              >
                <path
                  d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
                ></path>
              </svg>
            </a>
            <a
              v-if="props.source"
              :href="props.source"
              target="_blank"
              class="flex items-center px-2 font-extrabold text-white uppercase bg-black/50 rounded-2xl"
            >
              <IconGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Transition>
    <Transition :name="props.rightAnimation">
      <div :class="props.ltr ? 'text-right' : 'text-left'" class="w-full sm:w-1/2" v-show="targetIsVisible">
        <li class="my-5 text-2xl marker:text-primary">{{ props.title }}</li>
        <div
          :class="`${
            props.ltr ? 'border-r-2' : 'border-l-2'
          } p-5 text-center bg-slate-50 dark:bg-primary/25 border-primary shadow-primary/25`"
        >
          {{ props.description }}
        </div>
        <ul class="flex flex-wrap justify-center mx-0 my-5 space-x-1 md:mx-5 md:justify-end md:space-x-5">
          <li
            v-for="tech in props.technologies"
            class="flex items-center p-3 py-1 my-1 text-sm h-fit rounded-3xl bg-primary/25"
            :key="tech.name"
          >
            <img :src="tech.img" alt="Vue Logo" width="16" height="16" class="mr-1" />
            <span>{{ tech.name }}</span>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

.roll-in-right-enter-from,
.roll-in-right-leave-to {
  transform: translateX(500px) rotate(-200deg);
  opacity: 0;
}

.roll-in-right-enter-active,
.roll-in-right-leave-active {
  transition: transform 0.5s, opacity 0.7s;
}

ul {
  grid-template-columns: repeat(2, minmax(140px, 200px));
}

li {
  list-style-type: square;
}
</style>
