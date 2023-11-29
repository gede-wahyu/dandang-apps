import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/styles.scss";

import Button from "./components/Button.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("Button", Button);

app.mount("#app");
