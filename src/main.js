import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import { store, storeKey, FETCH_HSL } from './store.js'

const app = createApp(App)

const router = createRouter({
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

app.use(router)

app.use(store, storeKey)

store.dispatch(FETCH_HSL)

app.mount('#app')
