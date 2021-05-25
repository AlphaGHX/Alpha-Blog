import router from '@/router'
import store from '@/store'
import axios from 'axios'
import hljs from 'highlight.js'
import markdownIt from 'markdown-it'
import { SideBarTocData } from './Types'

export const getSideBarTocData = function(
  data: { content: string; level: number }[]
) {
  const res: SideBarTocData = { contents: [] }

  let max = -1
  let min = 10
  for (const item of data) {
    if (item.level > max) max = item.level
    if (item.level < min) min = item.level
  }

  let avg = (max - min) / 3
  if (avg === 0) avg = 1
  let tmp = 0
  // console.log(max, min, avg)
  for (const item of data) {
    if (item.level >= min && item.level < min + avg) item.level = 0
    else if (item.level >= min + avg && item.level < max - avg) item.level = 1
    else if (item.level >= max - avg && item.level <= max) item.level = 2
    if (item.level === 2 && tmp === 0) item.level = 1
    tmp = item.level
    // console.log(item)
  }

  let swH = -1
  let swHH = -1
  for (const item of data) {
    if (item.level === 0) {
      swHH = -1
      res.contents.push({
        title: item.content,
        icon: '',
        isActive: false,
        hideItem: []
      })
      swH++
    } else if (item.level === 1) {
      // eslint-disable-next-line no-unused-expressions
      res.contents[swH].hideItem?.push({
        title: item.content,
        isActive: false,
        hideItem: []
      })
      swHH++
    } else {
      // eslint-disable-next-line no-unused-expressions
      res.contents[swH].hideItem?.[swHH].hideItem?.push({
        title: item.content
      })
    }
    // console.log(swH, swHH)
  }
  // console.log(res)

  return res
}

export const getMarkdownData = function(contentSrc: string) {
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
      tocCallback: function(tocMarkdown: any, tocArray: any, tocHtml: any) {
        store.commit('setTocData', getSideBarTocData(tocArray))
      },
      anchorLinkSymbol: '#'
    })

  return axios.get(contentSrc).then((res) => {
    return markdown.render(res.data)
  })
}

export const pageTo = function(now: number, end: number): void {
  if (isNaN(now) || isNaN(end)) {
    return
  }
  console.log(now, end)
  now = Math.ceil(now)
  function render() {
    let step = (end - now) / 10
    step = step >= 0 ? Math.ceil(step) : Math.floor(step)
    now += step
    window.scrollTo(0, now)
    if (now !== end) {
      requestAnimationFrame(render)
    }
  }
  requestAnimationFrame(render)
}
