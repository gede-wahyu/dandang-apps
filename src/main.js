import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/styles.scss";

import Button from "./components/Button.vue";
import RadioButton from "./components/RadioButton.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("Button", Button);
app.component("RadioButton", RadioButton);

app.mount("#app");
