<template>
  <section id="contact" class="p-4 my-32">
    <div class="flex flex-col items-center max-w-4xl mx-auto">
      <h1 class="mt-10 mb-2 text-4xl">Get in Touch</h1>
      <p>Thanks for taking the time to reach out.</p>
      <form class="flex flex-col w-full sm:w-4/5">
        <div class="flex flex-col items-center w-full my-6 space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
          <input
            type="text"
            placeholder="Name"
            class="w-full px-5 py-3 bg-gray-200 rounded-full outline-none dark:bg-gray-800 placeholder-neutral-500"
          />
          <input
            type="text"
            placeholder="Email"
            class="w-full px-5 py-3 bg-gray-200 rounded-full outline-none dark:bg-gray-800 placeholder-neutral-500"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="5"
          class="px-5 py-3 mb-2 bg-gray-200 rounded-lg outline-none resize-none dark:bg-gray-800 placeholder-neutral-500"
        ></textarea>
        <button
          type="submit"
          class="px-10 py-2 mx-auto mt-4 text-white rounded shadow-xl bg-gradient-to-r from-primary/70 to-primary/90 shadow-primary/25"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
