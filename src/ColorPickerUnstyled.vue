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

    <p>In your Vue project’s <code>main.js</code> (i.e. where you call <code>new Vue(…)</code>), import the <code>ColorPicker</code> component and register it with <code>Vue.use</code>.</p>

    <pre><code>import ColorPicker from "vue-accessible-color-picker/dist/vue-accessible-color-picker-unstyled";

Vue.use(ColorPicker);</code></pre>

    <p><b>HTML</b>:</p>

    <pre><code>&lt;ColorPicker
  color="{{ hslString }}"
/&gt;</code></pre>

    <p><b>CSS</b>:</p>

    <pre><code>.vacp-color-space {
  height: 200px;
}</code></pre>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
// import { ColorPicker } from "vue-accessible-color-picker/dist/vue-accessible-color-picker-unstyled";
import ColorPicker from "../../../packages/vue-accessible-color-picker/src/ColorPicker.vue";

import { UPDATE_HSL } from "./hsl-store.actions.js"

export default {
  components: {
    ColorPicker
  },

  computed: {
    ...mapGetters(['hsl']),

    hslString() {
      return `hsl(${this.hsl.h * 360} ${this.hsl.s * 100}% ${this.hsl.l * 100}% / ${this.hsl.a})`
    }
  },

  methods: {
    ...mapActions([UPDATE_HSL]),

    onColorChange(colorData) {
      this[UPDATE_HSL](colorData.colors.hsl)
    }
  }
}
</script>

<style>
.vacp-color-space {
  height: 200px;
}
</style>
