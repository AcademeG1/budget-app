import store from "./store";
import App from "./App.vue";
import { createApp } from "vue";
import "element-plus/dist/index.css";
import {
  ElButton,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElAlert,
  ElDialog,
} from "element-plus";

const elements = [
  ElButton,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElAlert,
  ElDialog,
];

const app = createApp(App);

elements.forEach((El) => {
  app.component(El.name, El);
});

app.use(store).mount("#app");
