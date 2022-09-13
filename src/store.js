/**
 * @typedef {import('vuex').Store} Store
 * @template T
 */
/**
 * @typedef {import('vue').InjectionKey} InjectionKey
 * @template T
 */

import { createStore } from 'vuex'

export const FETCH_HSL = 'fetchHsl'
export const UPDATE_HSL = 'updateHsl'

const SET_HSL = 'setHsl'

/** @typedef {{ hsl: string | null }} State */


/** @type {State} */ const state = {
	hsl: null,
}

/** @type {InjectionKey<Store<State>>} */ export const storeKey = Symbol()

const actions = {
	[FETCH_HSL]({ commit }) {
		const hslString = window.sessionStorage.getItem('hsl')

		if (hslString !== null) {
			const hsl = JSON.parse(hslString)
			commit(SET_HSL, hsl)
		}
	},

	[UPDATE_HSL]({ commit }, hsl) {
		window.sessionStorage.setItem('hsl', JSON.stringify(hsl))
		commit(SET_HSL, hsl)
	},
}

const mutations = {
	[SET_HSL](state, hsl) {
		state.hsl = hsl
	},
}

export const store = createStore({
	state,
	actions,
	mutations,
})
