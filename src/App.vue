<template>
	<h1>vue-accessible-color-picker</h1>

	<p><a href="/">styled</a> | <a href="/unstyled">unstyled</a></p>

	<h2>Links</h2>

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

	<router-view />

	<footer>
		<p>Made with softness by <a href="https://kleinfreund.de">Philipp Rudloff</a>.</p>
	</footer>
</template>

<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	--hue: 0.75;

	tab-size: 2;
	margin: 0;
	font-size: 1em;
	line-height: 1.5;
	font-family: Lato, Numero, sans-serif;
	background-color: hsl(calc(var(--hue) * 360) 50% 95%);
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
	color: hsl(calc(var(--hue) * 360) 100% 10%);
}

h1,
h2 {
	font-family: Cambria, Caladea, Cochin, Georgia, Times, "Times New Roman", serif;
}

h1,
h2,
p,
ul,
pre {
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
	padding: 1.25rem;
	color: #fff;
	background-color: hsl(calc(var(--hue) * 360) 100% 10%);
}

code {
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
</style>
