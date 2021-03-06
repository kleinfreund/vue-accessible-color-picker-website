import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import { hslStore } from "./hsl-store.js";
import { FETCH_HSL } from "./hsl-store.actions.js";

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./ColorPickerStyled.vue"),
    },
    {
      path: "/unstyled",
      component: () => import("./ColorPickerUnstyled.vue"),
    },
  ],
});

app.use(router);

const store = createStore({
  ...hslStore,
});

app.use(store);

store.dispatch(FETCH_HSL);

app.mount('#app')
