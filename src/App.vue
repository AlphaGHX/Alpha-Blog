<template>
  <div class="nav">
    <div class="top">
      <div class="blog" :style="blogStyle" @click="toBlog">
        <img src="./assets/homeStar.png" alt="PNG" />
        <div :style="topTextOp">BLOG</div>
      </div>
      <div class="tools" :style="toolsStyle" @click="toTools">
        <img src="./assets/homeTriangle.png" alt="PNG" />
        <div :style="topTextOp">TOOLS</div>
      </div>
      <div class="about" :style="aboutStyle" @click="toAbout">
        <img src="./assets/homePentagon.png" alt="PNG" />
        <div :style="topTextOp">ABOUT</div>
      </div>
    </div>
    <div style="height: 200vh;"></div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRef, reactive } from 'vue'
import $ from 'jquery'

export default defineComponent({
  setup() {
    var blogStyle = ref({})
    var toolsStyle = ref({})
    var aboutStyle = ref({})
    var topTextOp = ref({})
    var nowScroll = 0
    var nowStat = 0
    var nowMain = 0

    var reqMainStat = { width: '100vw', height: '100vh' }
    var reqStat = { width: '0' }
    var resMainStat = { width: '100vw', height: '1vh' }
    var resStat = { width: '0', height: '1vh' }

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
        topTextOp.value = {
          'font-size': '50px'
        }
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

    onMounted(function() {
      $(window).on('scroll', throttle(getScrollTop, 100))
      nowStat = 0
      nowMain = 0
      nowScroll = $(window).scrollTop() as number
    })

    const getScrollTop = function() {
      const cScroll = $(window).scrollTop() as number
      if (nowStat === 1) {
        return
      }
      if (cScroll > nowScroll) {
        nowScroll = cScroll
        statSet(nowMain, 2)
      }
      if (cScroll < nowScroll) {
        nowScroll = cScroll
        statSet(nowMain, 0)
      }
    }

    const toBlog = function() {
      nowMain = 0
      statSet(nowMain, 1)
      setTimeout(function() {
        statSet(nowMain, 2)
      }, 1000)
    }

    const toTools = function() {
      nowMain = 1
      statSet(nowMain, 1)
      setTimeout(function() {
        statSet(nowMain, 2)
      }, 1000)
    }

    const toAbout = function() {
      nowMain = 2
      statSet(nowMain, 1)
      setTimeout(function() {
        statSet(nowMain, 2)
      }, 1000)
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
})
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
@mixin topBtn($bgc1, $bgc2, $sc) {
  font-family: system-ui;
  width: 100%;
  height: 10vh;
  background-image: linear-gradient(180deg, $bgc1, $bgc2);
  box-shadow: $sc;
  transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
  position: relative;
  overflow: hidden;
  opacity: 1;
  &:hover {
    height: 12vh;
  }
  img {
    position: absolute;
    right: -60px;
    bottom: -50px;
    height: 12vh;
  }
  div {
    position: absolute;
    font-weight: bold;
    font-size: 30px;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
  }
}
.nav {
  .top {
    position: fixed;
    display: flex;
    width: 100%;
    .blog {
      @include topBtn(#fff5f9 0%, #ffeaf2 70%, 0 2px 20px 2px #ffe2ed);
      color: #ffadcc;
    }
    .tools {
      @include topBtn(#ebf7ff 0%, #d1edff 70%, 0 2px 20px 2px #c9e9ff);
      color: #98d7ff;
    }
    .about {
      @include topBtn(#f8eeff 0%, #f1dbff 70%, 0 2px 20px 2px #edd2ff);
      color: #ddacfc;
    }
  }
}
</style>
