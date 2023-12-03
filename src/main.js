import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/styles.scss";

import Button from "./components/Button.vue";
import RadioButton from "./components/RadioButton.vue";
import Modal from "./components/Modal.vue";
import Tag from "./components/Tag.vue";
import InputNumber from "./components/InputNumber.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("Button", Button);
app.component("RadioButton", RadioButton);
app.component("Modal", Modal);
app.component("Tag", Tag);
app.component("InputNumber", InputNumber);

app.mount("#app");
