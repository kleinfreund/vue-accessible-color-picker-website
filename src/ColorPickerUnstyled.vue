<template>
	<h2>Demo</h2>

	<ColorPicker
		:color="hsl"
		@color-change="onColorChange"
	/>

	<h2>Installation</h2>

	<pre><code>npm install vue-accessible-color-picker</code></pre>

	<h2>Usage</h2>

	<p>In a Vue single file component, import the <code>ColorPicker</code> component.</p>

	<p>When using <a href="https://vuejs.org/guide/extras/composition-api-faq.html">Vue’s composition API</a>, you can directly use it in the file’s <code>template</code> section.</p>

	<pre><code>import { ColorPicker } from 'vue-accessible-color-picker/unstyled'</code></pre>

	<p><b>HTML</b>:</p>

	<pre><code>&lt;ColorPicker
	:color="{
		h: {{ hsl.h }},
		s: {{ hsl.s }},
		l: {{ hsl.l }},
		a: {{ hsl.a }}
	}"
/&gt;</code></pre>

	<p><b>CSS</b>:</p>

	<pre><code>.vacp-color-space {
	height: 200px;
}</code></pre>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ColorPicker } from 'vue-accessible-color-picker/unstyled'

import { storeKey } from './store.js'

const store = useStore(storeKey)

const hsl = computed(() => store.state.hsl)

function onColorChange(colorData) {
	store.dispatch('updateHsl', colorData.colors.hsl)
}
</script>

<style>
.vacp-color-picker {
	margin-top: 1.25rem;
}

.vacp-color-space {
	height: 200px;
}
</style>
