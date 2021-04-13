import { onMounted, ref } from 'vue'
import router from '../router'
import $ from 'jquery'

export default function() {
  const blogStyle = ref({})
  const toolsStyle = ref({})
  const aboutStyle = ref({})
  const topTextOp = ref({})

  let nowScroll = 0
  let nowStat = 0
  let nowMain = 0

  const reqMainStat = { width: '100vw', height: '100vh' }
  const reqStat = { width: '0' }
  const resMainStat = { width: '100vw', height: '1vh' }
  const resStat = { width: '0', height: '1vh' }

  onMounted(function() {
    $(window).on('scroll', throttle(getScrollTop, 100))
    nowStat = 0
    nowMain = 0
    nowScroll = $(window).scrollTop() as number
  })

  // 设置顶栏状态
  const statSet = function(main: number, stat: number) {
    if (stat === 0) {
      nowStat = 0
      topTextOp.value = {}
      blogStyle.value = {}
      toolsStyle.value = {}
      aboutStyle.value = {}
    } else if (stat === 1) {
      nowStat = 1
      if (main === 0) {
        blogStyle.value = reqMainStat
        toolsStyle.value = reqStat
        aboutStyle.value = reqStat
      } else if (main === 1) {
        blogStyle.value = reqStat
        toolsStyle.value = reqMainStat
        aboutStyle.value = reqStat
      } else {
        blogStyle.value = reqStat
        toolsStyle.value = reqStat
        aboutStyle.value = reqMainStat
      }
    } else {
      nowStat = 2
      topTextOp.value = {
        opacity: '0'
      }
      if (main === 0) {
        blogStyle.value = resMainStat
        toolsStyle.value = resStat
        aboutStyle.value = resStat
      } else if (main === 1) {
        blogStyle.value = resStat
        toolsStyle.value = resMainStat
        aboutStyle.value = resStat
      } else {
        blogStyle.value = resStat
        toolsStyle.value = resStat
        aboutStyle.value = resMainStat
      }
    }
  }

  // 节流
  const throttle = function(fn: () => void, delay: number) {
    let valid = true
    return function() {
      if (!valid) {
        return false
      }
      valid = false
      setTimeout(() => {
        fn()
        valid = true
      }, delay)
    }
  }

  // 监控滚动
  const getScrollTop = function() {
    const cScroll = $(window).scrollTop() as number
    if (nowStat === 1 || cScroll < 0) {
    } else if (cScroll > nowScroll) {
      nowScroll = cScroll
      statSet(nowMain, 2)
    } else if (cScroll < nowScroll) {
      nowScroll = cScroll
      statSet(nowMain, 0)
    }
  }

  const toBlog = function() {
    nowMain = 0
    statSet(nowMain, 1)
    setTimeout(function() {
      router.push({ name: 'Blog' }).then(function() {
        statSet(nowMain, 0)
      })
    }, 500)
  }

  const toTools = function() {
    nowMain = 1
    statSet(nowMain, 1)
    setTimeout(function() {
      router.push({ name: 'Tools' }).then(function() {
        statSet(nowMain, 0)
      })
    }, 500)
  }

  const toAbout = function() {
    nowMain = 2
    statSet(nowMain, 1)
    setTimeout(function() {
      router.push({ name: 'About' }).then(function() {
        statSet(nowMain, 0)
      })
    }, 500)
  }

  return {
    toBlog,
    toTools,
    toAbout,
    blogStyle,
    toolsStyle,
    aboutStyle,
    topTextOp
  }
}
