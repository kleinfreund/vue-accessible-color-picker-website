import { FETCH_HSL, UPDATE_HSL } from "./hsl-store.actions.js";

const SET_HSL = "setHsl";

export const hslStore = {
  state: {
    hsl: null,
  },

  getters: {
    hsl: (state) => state.hsl,
  },

  actions: {
    [FETCH_HSL]({ commit }) {
      const hsl = JSON.parse(window.sessionStorage.getItem("hsl"));
      commit(SET_HSL, hsl);
    },

    [UPDATE_HSL]({ commit }, hsl) {
      window.sessionStorage.setItem("hsl", JSON.stringify(hsl));
      commit(SET_HSL, hsl);
    },
  },

  mutations: {
    [SET_HSL](state, hsl) {
      state.hsl = hsl;
    },
  },
};
