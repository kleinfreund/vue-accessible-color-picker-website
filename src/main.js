import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import { hslStore } from "./hsl-store.js";
import { routes } from "./routes.js";
import { FETCH_HSL } from "./hsl-store.actions.js";

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

const store = createStore({
  ...hslStore,
});

app.use(store);

store.dispatch(FETCH_HSL);

app.mount('#app')
