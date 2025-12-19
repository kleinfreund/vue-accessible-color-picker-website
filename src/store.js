import { defineStore } from 'pinia'
import { ref } from 'vue'

/** @typedef {import('vue-accessible-color-picker').ColorHsl} ColorHsl */

export const useStore = defineStore('store', () => {
	const hsl = ref({
		h: 270,
		s: 100,
		l: 50,
		a: 0.8,
	})

	function fetchHsl() {
		const hslString = window.sessionStorage.getItem('hsl')

		if (hslString !== null) {
			hsl.value = JSON.parse(hslString)
		} else {
			const date = new Date()
			const dayOfTheYear = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
			const hsl = { h: dayOfTheYear % 360, s: 100, l: 50, a: 0.8 }

			setHsl(hsl)
		}
	}

	/**
	 * @param {ColorHsl} newHsl
	 */
	function setHsl(newHsl) {
		window.sessionStorage.setItem('hsl', JSON.stringify(newHsl))
		document.body.style.setProperty('--hue', String(newHsl.h))

		hsl.value = newHsl
	}

	return {
		hsl,
		fetchHsl,
		setHsl,
	}
})
