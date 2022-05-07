<template>
  <div>
    <vue-pdf-embed :source="pdfSource" />
  </div>
</template>

<script>
import VuePdfEmbed from '../src/vue-pdf-embed.vue'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      pdfSource:
        'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
    }
  },
}
</script>

<style lang="scss">
body {
  padding: 16px;
  background-color: #ccc;
}

.vue-pdf-embed {
  margin: auto;
  max-width: 480px;

  & > div {
    margin-bottom: 4px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
