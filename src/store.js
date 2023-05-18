/**
 * @typedef {import('vue').InjectionKey<T>} InjectionKey
 * @template T
 */
/**
 * @typedef {import('vuex/types/index.d.js').Store<State>} Store
 * @template State
 */
/**
 * @typedef {import('vuex/types/index.d.js').MutationTree<State>} MutationTree
 * @template State
 */
/**
 * @typedef {import('vuex/types/index.d.js').ActionTree<State, RootState>} ActionTree
 * @template State
 * @template RootState
 */
/**
 * @typedef {import('vuex/types/index.d.js').ActionContext<State, RootState>} ActionContext
 * @template State
 * @template RootState
 */
import { createStore } from 'vuex'

/** @typedef {import('vue-accessible-color-picker/types/index.d.ts').ColorHsl} ColorHsl */

/** @typedef {{ hsl: ColorHsl }} State */

/** @type {State} */
const state = {
	hsl: {
		h: 270,
		s: 1,
		l: 0.5,
		a: 0.8,
	},
}

/** @type {InjectionKey<Store<State>>} */
export const storeKey = Symbol('hslStore')

/** @type {ActionTree<State, State>} */
const actions = {
	/**
	 * @param {ActionContext<State, State>} state
	 */
	fetchHsl({ commit, dispatch }) {
		const hslString = window.sessionStorage.getItem('hsl')

		if (hslString !== null) {
			commit('setHsl', JSON.parse(hslString))
		} else {
			const date = new Date()
			const dayOfTheYear = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
			const hsl = { h: dayOfTheYear / 360, s: 1, l: 0.5, a: 0.8 }

			dispatch('updateHsl', hsl)
		}
	},

	/**
	 * @param {ActionContext<State, State>} state
	 * @param {ColorHsl} hsl
	 */
	updateHsl({ commit }, hsl) {
		window.sessionStorage.setItem('hsl', JSON.stringify(hsl))
		document.body.style.setProperty('--hue', String(hsl.h))

		commit('setHsl', hsl)
	},
}

/** @type {MutationTree<State>} */
const mutations = {
	/**
	 * @param {State} state
	 * @param {ColorHsl} hsl
	 */
	setHsl(state, hsl) {
		state.hsl = hsl
	},
}

export const store = createStore({
	state,
	actions,
	mutations,
})
