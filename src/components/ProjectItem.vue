<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { ref, withDefaults, defineProps } from "vue";

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
}

const props = withDefaults(defineProps<ProjectItemProps>(), {
  ltr: true,
});

const target = ref(null);
const targetIsVisible = ref(false);

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
      <img
        v-show="targetIsVisible"
        :src="'src/assets/images/' + props.img"
        alt="Avatar App"
        class="z-10 w-full transition-transform border rounded shadow-lg cursor-pointer sm:w-1/2 dark:border-stone-600 shadow-primary/25 hover:scale-105"
      />
    </Transition>
    <Transition :name="props.rightAnimation">
      <div :class="props.ltr ? 'text-right' : 'text-left'" v-show="targetIsVisible">
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
            <img :src="'src/assets/images/' + tech.img" alt="Vue Logo" width="16" height="16" class="mr-1" />
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
