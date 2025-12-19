import Color from 'colorjs.io'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
	const color = ref(new Color('hsl', [270, 100, 50], 0.8))

	function fetchColor() {
		const hslString = window.sessionStorage.getItem('hsl')
		if (hslString !== null) {
			color.value = new Color(hslString)
		} else {
			const date = new Date()
			const dayOfTheYear = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000

			updateColor(new Color('hsl', [dayOfTheYear % 360, 100, 50], 0.8))
		}
	}

	/**
	 * @param {Color} newColor
	 */
	function updateColor(newColor) {
		window.sessionStorage.setItem('hsl', newColor.toString({ format: 'hsl' }))
		document.body.style.setProperty('--hue', String(newColor.h ?? 0))

		color.value = newColor
	}

	return {
		color,
		fetchColor,
		updateColor,
	}
})
