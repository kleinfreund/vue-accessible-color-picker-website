<template>
  <section>
    <h2>Demo</h2>

    <ColorPicker
      id="color-picker-unstyled"
      class="margin-top"
      :color="hslString"
      @color-change="onColorChange"
    />

    <h2>Installation</h2>

    <pre><code>npm install vue-accessible-color-picker</code></pre>

    <h2>Usage</h2>

    <p>
      In a Vue single file component, import the
      <code>ColorPicker</code> component.
    </p>

    <p>
      When using
      <a
        href="https://vuejs.org/guide/extras/composition-api-faq.html"
      >Vue’s composition API</a>, you can directly use it in the file’s
      <code>template</code> section.
    </p>

    <pre><code>import { ColorPicker } from "vue-accessible-color-picker/unstyled";</code></pre>

    <p>
      <b>HTML</b>:
    </p>

    <pre><code>&lt;ColorPicker
  color="{{ hslString }}"
/&gt;</code></pre>

    <p>
      <b>CSS</b>:
    </p>

    <pre><code>.vacp-color-space {
  height: 200px;
}</code></pre>
  </section>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import { ColorPicker } from "vue-accessible-color-picker/unstyled";

import { storeKey, UPDATE_HSL } from "./store.js"

const store = useStore(storeKey)

const hslString = computed(() => {
  const hsl = store.state.hsl
  return `hsl(${hsl.h * 360} ${hsl.s * 100}% ${hsl.l * 100}% / ${hsl.a})`
})

function onColorChange(colorData) {
  store.dispatch(UPDATE_HSL, colorData.colors.hsl)
}
</script>

<style>
.vacp-color-space {
  height: 200px;
}
</style>
