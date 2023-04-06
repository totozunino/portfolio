<script setup lang="ts">
import { ref } from "vue";
import { sendMail } from "@/services/mailgun";
import { useToast } from "vue-toastification";

const { success, error } = useToast();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);
const errors = ref({
  name: "",
  email: "",
  message: "",
});
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubmit = async () => {
  if (!name.value) {
    errors.value = {
      name: "Name is required",
      email: "",
      message: "",
    };
    return;
  }

  if (!emailRegex.test(email.value)) {
    errors.value = {
      name: "",
      email: "Invalid email",
      message: "",
    };
    return;
  }

  if (!message.value) {
    errors.value = {
      name: "",
      email: "",
      message: "Message is required",
    };
    return;
  }

  try {
    isLoading.value = true;
    await sendMail({ name: name.value, email: email.value, message: message.value });
    success("Message received. I'll be in touch with you shortly");
    errors.value = {
      name: "",
      email: "",
      message: "",
    };
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (err) {
    error("Something went wrong, try again later");
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <section id="contact" class="p-4 my-32">
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <h1 class="mt-10 mb-2 text-4xl">Get in Touch</h1>
      <p>Thanks for taking the time to reach out.</p>
      <form @submit.prevent="handleSubmit" class="flex flex-col w-full pt-4 sm:w-4/5">
        <div class="flex flex-col items-center w-full my-6 space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
          <div class="flex flex-col w-full">
            <input
              type="text"
              placeholder="Name"
              v-model="name"
              class="w-full px-5 py-3 bg-gray-200 rounded-full outline-none dark:bg-gray-800 placeholder-neutral-500"
            />
            <span class="h-6 pl-2 text-red-500">{{ errors.name }}</span>
          </div>
          <div class="flex flex-col w-full">
            <input
              type="text"
              placeholder="Email"
              v-model="email"
              class="w-full px-5 py-3 bg-gray-200 rounded-full outline-none dark:bg-gray-800 placeholder-neutral-500"
            />
            <p class="h-6 pl-2 text-red-500">{{ errors.email }}</p>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <textarea
            placeholder="Message"
            rows="5"
            v-model="message"
            class="px-5 py-3 mb-2 bg-gray-200 rounded-lg outline-none resize-none dark:bg-gray-800 placeholder-neutral-500"
          ></textarea>
          <p class="h-6 pl-2 text-red-500">{{ errors.message }}</p>
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="px-10 py-2 mx-auto mt-4 text-white transition-transform scale-100 rounded shadow-xl bg-gradient-to-r from-primary/70 to-primary/90 shadow-primary/25 hover:scale-110"
        >
          {{ isLoading ? "Sending..." : "Submit" }}
        </button>
      </form>
    </div>
  </section>
</template>
