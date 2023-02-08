import { createApp } from "vue";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXmark,
  faBars,
  faLanguage,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import router from "@/router/index.js";
import App from "@/App.vue";

library.add(faXmark);
library.add(faBars);
library.add(faLanguage);
library.add(faLightbulb);

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
