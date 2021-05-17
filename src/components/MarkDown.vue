<template>
  <div class="markdown-main">
    <div class="markdown-body" v-html="$store.state.markdownData"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'highlight.js/styles/xcode.css'
import '@/style/githubMarkdown.scss'
import store from '@/store'

export default defineComponent({
  name: 'MarkDown',
  setup() {
    const markdownOut = store.state.markdownData
    return {
      markdownOut
    }
  }
})
</script>

<style lang="scss" scoped>
.markdown-main {
  overflow: hidden;
}
</style>
