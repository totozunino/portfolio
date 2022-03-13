<script setup lang="ts">
const props = defineProps<{ showDrawer: boolean }>();
const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>
<template>
  <button
    type="button"
    class="z-40 inline-block transition-transform outline-none hover:scale-105 sm:hidden"
    :class="props.showDrawer ? 'drawer-active' : ''"
    @click="emit('toggle')"
  >
    <div class="h-[2px] w-9 my-[6px] bg-gray-700 dark:bg-slate-400 duration-300 transition-all top-bar" />
    <div class="h-[2px] w-9 my-[6px] middle-bar" />
    <div class="h-[2px] w-9 my-[6px] bg-gray-700 dark:bg-slate-400 duration-300 transition-all bottom-bar" />
  </button>
</template>

<style scoped>
.drawer-active .top-bar {
  -webkit-transform: rotate(-45deg) translate(-5px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}
.drawer-active .bottom-bar {
  -webkit-transform: rotate(45deg) translate(-5px, -6px);
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
