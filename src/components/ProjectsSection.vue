<script setup lang="ts">
import ProjectItem from "@/components/ProjectItem.vue";
import AvatarAppImg from "@/assets/images/avatar_app.png";
import ChatAppImg from "@/assets/images/chat-app.png";
import VueImg from "@/assets/images/vue-logo.png";
import VuetifyImg from "@/assets/images/vuetify.svg";
import TypescriptImg from "@/assets/images/typescript.png";
import ReactImg from "@/assets/images/react-logo.svg";
import TailwindImg from "@/assets/images/tailwindcss.svg";
import FirebaseImg from "@/assets/images/firebase.png";

const projects = [
  {
    title: "Avatar Maker",
    description: "An app to customize a fun avatar, built in Vue.js, Typescript and Vuetify",
    technologies: [
      {
        name: "Vue.js",
        img: VueImg,
      },
      {
        name: "Vuetify",
        img: VuetifyImg,
      },
      {
        name: "Typescript",
        img: TypescriptImg,
      },
    ],
    leftAnimation: "roll-in-left",
    rightAnimation: "fade",
    img: AvatarAppImg,
  },
  {
    title: "Web Chat",
    description:
      "A web app for chating with online users. Sign in and start chatting, send pictures, audios and have fun!",
    technologies: [
      {
        name: "React.js",
        img: ReactImg,
      },
      {
        name: "Tailwind",
        img: TailwindImg,
      },
      {
        name: "Firebase",
        img: FirebaseImg,
      },
      {
        name: "Typescript",
        img: TypescriptImg,
      },
    ],
    rightAnimation: "fade",
    leftAnimation: "roll-in-left",
    ltr: false,
    img: ChatAppImg,
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
