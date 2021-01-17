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

    <h3>Register component locally</h3>

    <p>In a Vue single file component (SFC), import the <code>ColorPicker</code> plugin and register the component via the <code>components</code> property on the Vue instance.</p>

    <pre><code>import { ColorPicker } from "vue-accessible-color-picker/dist/vue-accessible-color-picker-unstyled";

export default {
  components: {
    ColorPicker,
  },
}</code></pre>

    <h3>Register component globally</h3>

    <p>In your Vue project’s <code>main.js</code> file (i.e. where you call <code>app.mount</code>), import the <code>ColorPicker</code> plugin and register the component with <code>app.component</code>.</p>

    <pre><code>import { ColorPicker } from "vue-accessible-color-picker/dist/vue-accessible-color-picker-unstyled";

app.component("ColorPicker", ColorPicker);</code></pre>

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
import { mapState } from "vuex"
import { ColorPicker } from "vue-accessible-color-picker/dist/vue-accessible-color-picker-unstyled";

import { UPDATE_HSL } from "./hsl-store.actions.js"

export default {
  components: {
    ColorPicker
  },

  computed: {
    ...mapState({
      hsl: (state) => state.hsl,
    }),

    hslString() {
      return `hsl(${this.hsl.h * 360} ${this.hsl.s * 100}% ${this.hsl.l * 100}% / ${this.hsl.a})`
    }
  },

  methods: {
    onColorChange(colorData) {
      this.$store.dispatch(UPDATE_HSL, colorData.colors.hsl)
    }
  }
}
</script>

<style>
.vacp-color-space {
  height: 200px;
}
</style>
