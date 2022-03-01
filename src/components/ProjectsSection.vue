<script setup lang="ts">
import ProjectItem from "@/components/ProjectItem.vue";

const projects = [
  {
    title: "Avatar Maker",
    description: "An app to customize a fun avatar, built in Vue.js, Typescript and Vuetify",
    technologies: [
      {
        name: "Vue.js",
        img: "vue-logo.png",
      },
      {
        name: "Vuetify",
        img: "vuetify.svg",
      },
      {
        name: "Typescript",
        img: "typescript.png",
      },
    ],
    leftAnimation: "roll-in-left",
    rightAnimation: "fade",
    img: "avatar_app.png",
  },
  {
    title: "Web Chat",
    description:
      "A web app for chating with online users. Sign in and start chatting, send pictures, audios and have fun!",
    technologies: [
      {
        name: "React.js",
        img: "react-logo.svg",
      },
      {
        name: "Tailwind",
        img: "tailwindcss.svg",
      },
      {
        name: "Firebase",
        img: "firebase.png",
      },
      {
        name: "Typescript",
        img: "typescript.png",
      },
    ],
    rightAnimation: "fade",
    leftAnimation: "roll-in-left",
    ltr: false,
    img: "chat-app.png",
  },
  // {
  //   title: "Only Coders",
  //   description:
  //     "Social network mobile app focused on technology for it to sponsor as a facilitator in the interconnection of professionals of the area.",
  //   technologies: [
  //     {
  //       name: "Flutter",
  //       img: "flutter.svg",
  //     },
  //     {
  //       name: "Dart",
  //       img: "dart.png",
  //     },
  //     {
  //       name: "Firebase",
  //       img: "firebase.png",
  //     },
  //   ],
  //   rightAnimation: "fade",
  //   leftAnimation: "roll-in-left",
  //   img: "onlycoders.png",
  // },
];
</script>

<template>
  <section id="projects" class="h-full p-4">
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <h1 class="mt-10 text-4xl">Projects</h1>
      <ProjectItem v-for="project in projects" :key="project.title" v-bind="{ ...project }"></ProjectItem>
    </div>
  </section>
</template>
