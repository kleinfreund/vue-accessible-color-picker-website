import { createApp } from 'vue'

import App from './App.vue'
import { store, storeKey } from './store.js'

const app = createApp(App)

app.use(store, storeKey)

store.dispatch('fetchHsl')

app.mount('#app')
