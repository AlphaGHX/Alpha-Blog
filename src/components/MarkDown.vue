<template>
  <div class="markdown-main">
    <div class="markdown-body" v-html="raw"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'highlight.js/styles/xcode.css'
import '@/style/githubMarkdown.scss'

export default defineComponent({
  name: 'MarkDown',
  props: {
    raw: String
  }
})
</script>

<style lang="scss" scoped>
.markdown-main {
  overflow: hidden;
}
</style>
