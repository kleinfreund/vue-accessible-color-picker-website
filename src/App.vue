<template>
  <div class="page">
    <main class="wrapper">
      <h1>vue-accessible-color-picker</h1>

      <a href="/">styled</a>
      |
      <a href="/unstyled">unstyled</a>

      <h2>Links</h2>

      <ul>
        <li>
          Package:

          <a href="https://www.npmjs.com/package/vue-accessible-color-picker"><b>npmjs.com</b>/package/vue-accessible-color-picker</a>
        </li>

        <li>
          Repository:

          <a href="https://github.com/kleinfreund/vue-accessible-color-picker"><b>github.com</b>/kleinfreund/vue-accessible-color-picker</a>
        </li>
      </ul>

      <router-view class="margin-top-large" />
    </main>

    <footer class="page-foot">
      <div class="wrapper">
        <p>Made with softness by <a href="https://kleinfreund.de">Philipp Rudloff</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex"

import { UPDATE_HSL } from "./hsl-store.actions.js"

export default {
  name: 'App',

  computed: {
    ...mapState({
      hsl: (state) => state.hsl,
    }),
  },

  created() {
    if (this.hsl === null) {
      const date = new Date()
      const dayOfTheYear = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000

      const hsl = { h: dayOfTheYear / 360, s: 1, l: 0.5, a: 1 }
      this.$store.dispatch(UPDATE_HSL, hsl)
    }
  },

  mounted() {
    document.body.style.setProperty('--hue', this.hsl.h)

    this.colorPicker = () => import('./ColorPickerUnstyled.vue')
    this.colorPickerUnstyled = this.colorPicker
  },

  watch: {
    'hsl.h': function (newHue) {
      if (document.body) {
        document.body.style.setProperty('--hue', newHue)
      }
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  --hue: 0.75;

  margin: 0;
  font-size: 1em;
  line-height: 1.5;
  font-family: Lato, Numero, sans-serif;
  background-color: hsl(calc(var(--hue) * 360) 50% 95%);
}

:focus {
  outline: 3px solid orange;
}

a {
  color: hsl(calc(var(--hue) * 360) 100% 10%);
}

h1,
h2,
h3 {
  font-family: Cambria, Caladea, Cochin, Georgia, Times, 'Times New Roman', serif;
}

h1,
h2,
h3,
p,
ul,
pre {
  margin-top: 1.5rem;
  margin-bottom: 0;
}

.margin-top {
  margin-top: 1.5rem;
}

.margin-top-large {
  margin-top: 3rem;
}

h1:first-child,
h2:first-child,
h3:first-child,
p:first-child,
ul:first-child {
  margin-top: 0;
}

:not(h1) + h2,
:not(h2) + h3 {
  margin-top: 3rem;
}

pre {
  overflow-x: auto;
  padding: 1.5rem;
  color: #fff;
  background-color: hsl(calc(var(--hue) * 360) 100% 10%);
}

code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: inherit;
}

.page {
  display: grid;
  min-height: 100%;
  grid-template-rows: 1fr auto;
  padding: 1rem 2rem;
}

.page > * {
  min-width: 0; /* The nasty grid blow out */
}

@media (min-width: 1000px) {
  .page {
    padding: 5rem 8rem;
  }
}

.page-foot {
  margin-top: 8rem;
}

.wrapper {
  max-width: 100%;
}

@media (min-width: 800px) {
  .wrapper {
    max-width: 800px;
  }
}
</style>
