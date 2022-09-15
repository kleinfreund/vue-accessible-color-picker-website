import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('./ColorPickerStyled.vue'),
		},
		{
			path: '/unstyled',
			component: () => import('./ColorPickerUnstyled.vue'),
		},
	],
})
