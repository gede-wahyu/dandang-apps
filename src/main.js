import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles.scss";

import Button from "./components/Button.vue";

const app = createApp(App);

app.use(router);

app.component("Button", Button);

app.mount("#app");
