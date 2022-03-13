import { createApp } from "vue";
import Toast, { PluginOptions } from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  maxToasts: 5,
  closeOnClick: true,
  closeButton: false,
  timeout: 3000,
};

const app = createApp(App);

app.use(router);

app.use(Toast, options);

app.mount("#app");
