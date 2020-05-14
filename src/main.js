import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import { hslStore } from "./hsl-store.js";
import { routes } from "./routes.js";
import { FETCH_HSL } from "./hsl-store.actions.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: "history",
  routes,
});

const store = new Vuex.Store({
  ...hslStore,
});

store.dispatch(FETCH_HSL);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
