<template>
  <section>
    <h2>Demo</h2>

    <ColorPicker
      id="color-picker-styled"
      class="margin-top"
      :color="hsl"
      @color-change="onColorChange"
    >
      <template #hue-range-input-label>
        <span class="sr-only">Hue</span>
      </template>

      <template #alpha-range-input-label>
        <span class="sr-only">Alpha</span>
      </template>

      <template #copy-button>
        <span class="sr-only">Copy color</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <path d="M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z" fill="currentColor" />

          <path d="M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z" fill="currentColor" />
        </svg>
      </template>

      <template #format-switch-button>
        <span class="sr-only">Switch format</span>

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
        >
          <path d="M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z" fill="currentColor" />
        </svg>
      </template>
    </ColorPicker>

    <h2>Installation</h2>

    <pre><code>npm install vue-accessible-color-picker</code></pre>

    <h2>Usage</h2>

    <p>In your Vue project’s <code>main.js</code> (i.e. where you call <code>new Vue(…)</code>), import the <code>ColorPicker</code> component and register it with <code>Vue.use</code>.</p>

    <pre><code>import ColorPicker from "vue-accessible-color-picker";

Vue.use(ColorPicker);</code></pre>

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
    &lt;span class="sr-only"&gt;Hue&lt;/span&gt;
  &lt;/template&gt;

  &lt;template #alpha-range-input-label&gt;
    &lt;span class="sr-only"&gt;Alpha&lt;/span&gt;
  &lt;/template&gt;

  &lt;template #copy-button&gt;
    &lt;span class="sr-only"&gt;Copy color&lt;/span&gt;

    &lt;svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
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
    &lt;span class="sr-only"&gt;Switch format&lt;/span&gt;

    &lt;svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
    &gt;
      &lt;path
        d="M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z"
        fill="currentColor"
      /&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/ColorPicker&gt;</code></pre>

    <p><b>CSS</b>:</p>

    <pre><code>.sr-only {
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
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { ColorPicker } from "vue-accessible-color-picker";

import { UPDATE_HSL } from "./hsl-store.actions.js"

export default {
  components: {
    ColorPicker
  },

  computed: {
    ...mapGetters(['hsl'])
  },

  methods: {
    ...mapActions([UPDATE_HSL]),

    onColorChange(colorData) {
      this[UPDATE_HSL](colorData.colors.hsl)
    }
  }
}
</script>

<style scoped>
/*
Utility: Visibility hidden

Source: https://github.com/h5bp/html5-boilerplate

Hide only visually, but have it available for screen readers:
https://snook.ca/archives/html_and_css/hiding-content-for-accessibility

1. For long content, line feeds are not interpreted as spaces
   and small width causes content to wrap 1 word per line:
   https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
*/
.sr-only {
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
