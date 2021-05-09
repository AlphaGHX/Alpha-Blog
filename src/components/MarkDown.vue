<template>
  <div class="markdown-main">
    <div class="markdown-body" v-html="markdownOut"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import 'highlight.js/styles/xcode.css'
import hljs from 'highlight.js'
import '@/style/githubMarkdown.scss'
import markdownIt from 'markdown-it'
import store from '@/store'
import { getSideBarTocData } from '@/hooks/tools'

export default defineComponent({
  name: 'MarkDown',
  setup() {
    const markdown = markdownIt({
      highlight: function(str, lang) {
        if (lang) {
          if (lang === 'vue') lang = 'html'
          try {
            return hljs.highlight(lang, str).value
          } catch (__) {}
        }

        return ''
      }
    })
      .use(require('markdown-it-anchor').default)
      .use(require('markdown-it-sup'))
      .use(require('markdown-it-sub'))
      .use(require('markdown-it-toc-and-anchor').default, {
        tocCallback: function(
          tocMarkdown: any,
          tocArray: any,
          tocHtml: any
        ) {
          store.commit('setTocData', getSideBarTocData(tocArray))
        },
        anchorLinkSymbol: '#'
      })

    const markdownOut = ref()

    axios.get(store.state.blogItem.contentSrc).then((res) => {
      markdownOut.value = markdown.render(res.data)
    })

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
