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
import NextImg from "@/assets/images/nextjs.png";
import CypressImg from "@/assets/images/cypress.png";
import SeekrImg from "@/assets/images/seekr.png";
import OnlyCodersImg from "@/assets/images/onlycoders.png";
import FlutterImg from "@/assets/images/flutter.svg";
import DartImg from "@/assets/images/dart.png";

const projects = [
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
    imgClasses: "max-h-full",
    source: "https://github.com/totozunino/react-chat",
    url: "",
  },
  {
    title: "Seekr Search",
    description:
      "A web app offerings a search engine, news search, and information evaluation through Seekr Score and Political Lean Indicator.",
    technologies: [
      {
        name: "Next.js",
        img: NextImg,
      },
      {
        name: "Tailwind",
        img: TailwindImg,
      },
      {
        name: "Cypress",
        img: CypressImg,
      },
      {
        name: "Typescript",
        img: TypescriptImg,
      },
    ],
    rightAnimation: "fade",
    leftAnimation: "roll-in-left",
    img: SeekrImg,
    imgClasses: "max-h-full",
    source: "",
    url: "https://beta.seekr.com/",
  },
  {
    title: "Only Coders",
    description:
      "Social network mobile app focused on technology for it to sponsor as a facilitator in the interconnection of professionals of the area.",
    technologies: [
      {
        name: "Flutter",
        img: FlutterImg,
      },
      {
        name: "Dart",
        img: DartImg,
      },
      {
        name: "Firebase",
        img: FirebaseImg,
      },
    ],
    rightAnimation: "fade",
    leftAnimation: "roll-in-left",
    ltr: false,
    img: OnlyCodersImg,
    imgClasses: "border-none shadow-none max-h-[242px]",
    source: "",
    url: "",
    disableOverlay: true,
  },
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
    imgClasses: "max-h-full",
    source: "https://github.com/totozunino/avatar-maker",
    url: "https://avatar-maker-2ba67.web.app/",
  },
];
</script>

<template>
  <section id="projects" class="h-full p-4">
    <h1 class="flex flex-col items-center max-w-4xl mx-auto mt-10 text-4xl">Projects</h1>
    <div class="flex flex-col items-center max-w-4xl mx-auto space-y-32">
      <ProjectItem v-for="project in projects" :key="project.title" v-bind="{ ...project }"></ProjectItem>
    </div>
  </section>
</template>
