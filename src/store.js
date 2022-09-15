import { createStore } from 'vuex'

const state = {
	hsl: null,
}

export const storeKey = Symbol()

const actions = {
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

	updateHsl({ commit }, hsl) {
		window.sessionStorage.setItem('hsl', JSON.stringify(hsl))
		document.body.style.setProperty('--hue', hsl.h)

		commit('setHsl', hsl)
	},
}

const mutations = {
	setHsl(state, hsl) {
		state.hsl = hsl
	},
}

export const store = createStore({
	state,
	actions,
	mutations,
})
