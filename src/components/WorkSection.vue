<script setup lang="ts">
import { ref } from "vue";
import VairixImg from "@/assets/images/vairix.jpg";
import BrokenRubikImg from "@/assets/images/brokenrubik.jpeg";
import IntegraCCSImg from "@/assets/images/integraccs.svg";
import FreelanceImg from "@/assets/images/freelance.png";

const selectedTab = ref(0);
const tabs = [
  {
    name: "Vairix",
    date: "Jul 2021 - Actual",
    description: [],
    projects: [
      {
        name: "Stuzo",
        tasks: [
          "Involved in the development and implementation of software solutions for clients in the digital commerce industry",
          "Designed, coded, tested, and maintained software applications, and collaborated with cross-functional teams to meet client and end-user needs",
          "Worked with microservices architecture, large data sets and user pools using Nest.js, Typescript, Graphql, K8s, RabbitMQ, and AWS",
        ],
      },
      {
        name: "Political IQ",
        tasks: [
          "Implemented ETL processes using Nest.js, Typescript, MongoDB, PostgreSQL, RabbitMQ, AWS and Docker",
          "Involved in the development of backend APIs using Nest.js, Typescript, PostgreSQL, Redis",
          "Design of the frontend structure using React, Typescript, Redux, Redux toolkit, TailwindCSS and Storybook",
        ],
      },
      {
        name: "Seekr",
        tasks: [
          "Developed an search engine app mostly using Next.js, Typescript, TailwindCSS and Cypress",
          "Created a React component library using Typescript, TailwindCSS, Storybook, Testing library and Github Packages",
        ],
      },

      // "Working for a US based company with large amount data and an big microservices architecture using Nest.js, Typescript, GraphQL, PostgreSQL, Redis, RabbitMQ, Docker, AWS and Kubernetes",
      // "Developed from start to finish an MVP for a politician game with an microservices architecture using Nest.js, Typescript, MongoDB, PostgreSQL, Redis, RabbitMQ, Docker and AWS",
    ],
    img: VairixImg,
    width: "36",
    url: "https://www.vairix.com/",
  },
  {
    name: "Freelance",
    date: "Jan 2023 - Actual",
    description: ["Working on the design and develop of multiple web games using Vue, Typescript, SASS and Storybook"],
    img: FreelanceImg,
    width: "36",
  },
  {
    name: "Broken Rubik",
    date: "Apr 2020 - Feb 2021",
    description: [
      "Worked on an website using Gridsome, Typescript and TailwindCSS",
      "Built from scratch the backend and frontend for an Shopify app using Vue, Typescript, Koa, Heroku and PostgreSQL",
      "Developed a Node app using Fastify, Typescript and Algolia",
      "Contributed and maintain code for e-commerce websites primarily using Javascript, Sass and jQuery",
      "Worked with NetSuite platform creating SuiteScripts",
    ],
    img: BrokenRubikImg,
    width: "36",
    url: "https://brokenrubik.co/",
  },
  {
    name: "Integra CCS",
    date: "Sep 2019 - Apr 2020",
    description: [
      "Built a call centers management app using Vue, Vuex, Vuetify and Typescript",
      "Developed a Node backend using Koa, Typescript and Couchbase",
      "Worked on a video conference web app using Vue, Typescript and WebRTC",
    ],
    img: IntegraCCSImg,
    width: "55",
    url: "https://www.integraccs.com/",
  },
];
</script>
<template>
  <section id="work" class="h-full p-4 my-32">
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <h1 class="my-10 text-4xl">Work Experience</h1>
      <div class="w-full mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex overflow-x-auto" role="tablist">
          <li
            role="presentation"
            v-for="({ name, img, width }, index) in tabs"
            :key="name"
            @click="selectedTab = index"
          >
            <div
              class="flex items-center px-4 py-3 text-sm font-medium text-gray-500 transition-all border-b-2 border-transparent cursor-pointer w-max hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              :class="`${index === selectedTab ? 'bg-primary/25 border-primary/100' : 'hover:border-primary/50'}`"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <img :src="img" :alt="name" :width="width" class="mr-3 rounded" />
              <span>
                {{ name }}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          role="tabpanel"
          v-for="({ name }, index) in tabs"
          :key="name"
          v-show="selectedTab === index"
        >
          <p class="text-lg">
            Software Engineer
            <a :href="tabs[selectedTab].url" class="font-bold text-primary" target="_blank" rel="nofollow"
              >@{{ tabs[selectedTab].name }}</a
            >
          </p>
          <p class="text-xs tracking-wider">{{ tabs[selectedTab].date }}</p>
          <ul class="pt-4 pl-4 list-square marker:text-primary">
            <li v-for="description in tabs[selectedTab].description" :key="description">
              {{ description }}
            </li>
          </ul>
          <ul class="pl-4 list-square marker:text-primary">
            <li v-for="project in tabs[selectedTab].projects" :key="project.name" class="py-2">
              {{ project.name }}

              <ul class="pl-4 list-circle marker:text-primary">
                <li v-for="task in project.tasks" :key="task">
                  {{ task }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
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
</style>
