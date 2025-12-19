<template>
	<h1><a href="/">vue-accessible-color-picker</a></h1>

	<p>A color picker component for Vue.js.</p>

	<ul>
		<li>
			Package:

			<a href="https://www.npmjs.com/package/vue-accessible-color-picker">
				<b>npmjs.com</b>/package/vue-accessible-color-picker
			</a>
		</li>

		<li>
			Repository:

			<a href="https://github.com/kleinfreund/vue-accessible-color-picker">
				<b>github.com</b>/kleinfreund/vue-accessible-color-picker
			</a>
		</li>
	</ul>

	<h2>Demo</h2>

	<ColorPicker
		:color="store.color"
		@color-change="onColorChange"
	>
		<template #hue-range-input-label>
			<span class="visually-hidden">Hue</span>
		</template>

		<template #alpha-range-input-label>
			<span class="visually-hidden">Alpha</span>
		</template>
	</ColorPicker>

	<h2>Installation</h2>

	<pre><code>npm install vue-accessible-color-picker</code></pre>

	<h2>Usage</h2>

	<p>In a Vue single file component, import the <code>ColorPicker</code> component and its styles.</p>

	<pre><code>&lt;template&gt;
	&lt;ColorPicker /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ColorPicker } from 'vue-accessible-color-picker'
&lt;/script&gt;

&lt;style&gt;
@import url('vue-accessible-color-picker/styles');
&lt;/style&gt;</code></pre>

	<p>You can also register the component and import the styles globally.</p>

	<details>
		<summary>Template and styles used for the demo above</summary>

		<p><b>Template</b>:</p>

		<pre><code>&lt;ColorPicker
	:color="{
		h: {{ store.color.h }},
		s: {{ store.color.s }},
		l: {{ store.color.l }},
		a: {{ store.color.a }}
	}"
&gt;
	&lt;template #hue-range-input-label&gt;
		&lt;span class="visually-hidden"&gt;Hue&lt;/span&gt;
	&lt;/template&gt;

	&lt;template #alpha-range-input-label&gt;
		&lt;span class="visually-hidden"&gt;Alpha&lt;/span&gt;
	&lt;/template&gt;
&lt;/ColorPicker&gt;</code></pre>

		<p><b>Styles</b>:</p>

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
	</details>

	<p>Made with love by <a href="https://kleinfreund.de">Philipp</a>.</p>
</template>

<script setup>
import { ColorPicker } from 'vue-accessible-color-picker'

import { useStore } from './store.js'

/** @typedef {import('vue-accessible-color-picker').ColorChangeDetail} ColorChangeDetail */

const store = useStore()
store.fetchColor()

/**
 * @param {ColorChangeDetail} event
 */
function onColorChange(event) {
	store.updateColor(event.color)
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
	white-space: nowrap;
}
</style>

<style>
@import url('vue-accessible-color-picker/styles');

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	tab-size: 2;
	margin: 0;
	font-size: 1em;
	line-height: 1.5;
	font-family: Lato, Numero, sans-serif;
	background-color: hsl(var(--hue, 270) 50% 95%);
}

main {
	width: min(1000px, 100%);
	padding: clamp(0.5rem, 3vh, 2.5rem) clamp(0.5rem, 3vw, 2.5rem);
}

footer {
	margin-top: 5rem;
}

:focus {
	outline: 3px solid orange;
}

a {
	color: hsl(var(--hue, 270) 100% 20%);
}

h1,
h2 {
	font-family: Cambria, Caladea, Cochin, Georgia, Times, "Times New Roman", serif;
}

h1,
h2,
p,
ul,
pre,
details {
	margin-top: 1.25rem;
	margin-bottom: 0;
}

h1:first-child,
h2:first-child,
p:first-child,
ul:first-child {
	margin-top: 0;
}

pre {
	overflow-x: auto;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	background-color: hsl(var(--hue, 270) 100% 92.5%);
}

code {
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

.vacp-color-picker {
	margin-top: 1.25rem;
}
</style>
