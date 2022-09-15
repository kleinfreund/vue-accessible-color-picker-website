<template>
	<h2>Demo</h2>

	<ColorPicker
		:color="hsl"
		@color-change="onColorChange"
	>
		<template #hue-range-input-label>
			<span class="visually-hidden">Hue</span>
		</template>

		<template #alpha-range-input-label>
			<span class="visually-hidden">Alpha</span>
		</template>

		<template #copy-button>
			<span class="visually-hidden">Copy color</span>

			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="15"
				height="15"
			>
				<path
					d="M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z"
					fill="currentColor"
				/>

				<path
					d="M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z"
					fill="currentColor"
				/>
			</svg>
		</template>

		<template #format-switch-button>
			<span class="visually-hidden">Switch format</span>

			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="15"
			>
				<path d="M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z" fill="currentColor" />
			</svg>
		</template>
	</ColorPicker>

	<h2>Installation</h2>

	<pre><code>npm install vue-accessible-color-picker</code></pre>

	<h2>Usage</h2>

	<p>In a Vue single file component, import the <code>ColorPicker</code> component.</p>

	<p>When using <a href="https://vuejs.org/guide/extras/composition-api-faq.html">Vue’s composition API</a>, you can directly use it in the file’s <code>template</code> section.</p>

	<pre><code>import { ColorPicker } from 'vue-accessible-color-picker'</code></pre>

	<p><b>HTML</b>:</p>

	<pre><code>&lt;ColorPicker
	:color="{
		h: {{ hsl.h }},
		s: {{ hsl.s }},
		l: {{ hsl.l }},
		a: {{ hsl.a }}
	}"
&gt;
	&lt;template #hue-range-input-label&gt;
		&lt;span class="visually-hidden"&gt;Hue&lt;/span&gt;
	&lt;/template&gt;

	&lt;template #alpha-range-input-label&gt;
		&lt;span class="visually-hidden"&gt;Alpha&lt;/span&gt;
	&lt;/template&gt;

	&lt;template #copy-button&gt;
		&lt;span class="visually-hidden"&gt;Copy color&lt;/span&gt;

		&lt;svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
		&gt;
			&lt;path
				d="M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z"
				fill="currentColor"
			/&gt;

			&lt;path
				d="M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z"
				fill="currentColor"
			/&gt;
		&lt;/svg&gt;
	&lt;/template&gt;

	&lt;template #format-switch-button&gt;
		&lt;span class="visually-hidden"&gt;Switch format&lt;/span&gt;

		&lt;svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="15"
		&gt;
			&lt;path
				d="M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z"
				fill="currentColor"
			/&gt;
		&lt;/svg&gt;
	&lt;/template&gt;
&lt;/ColorPicker&gt;</code></pre>

	<p><b>CSS</b>:</p>

	<pre><code>.visually-hidden {
	position: absolute;
	overflow: hidden;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	border: 0;
	white-space: nowrap;
}</code></pre>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ColorPicker } from 'vue-accessible-color-picker'

import { storeKey } from './store.js'

const store = useStore(storeKey)

const hsl = computed(() => store.state.hsl)

function onColorChange(colorData) {
	store.dispatch('updateHsl', colorData.colors.hsl)
}
</script>

<style scoped>
.visually-hidden {
	position: absolute;
	overflow: hidden;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	border: 0;
	white-space: nowrap; /* 1. */
}
</style>

<style>
.vacp-color-picker {
	margin-top: 1.25rem;
}
</style>
