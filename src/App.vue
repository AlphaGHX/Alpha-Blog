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
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import top from './hooks/Home'

export default defineComponent({
  setup() {
    const {
      toBlog,
      toTools,
      toAbout,
      blogStyle,
      toolsStyle,
      aboutStyle,
      topTextOp
    } = top()

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
  font-family: system-ui;
  margin: 0px;
  padding: 0px;
}
@mixin topBtn($bgc1, $bgc2, $sc) {
  width: 100%;
  height: 10vh;
  background-image: linear-gradient(180deg, $bgc1, $bgc2);
  box-shadow: $sc;
  position: relative;
  overflow: hidden;
  opacity: 1;
  // backdrop-filter: saturate(180%) blur(20px);
  transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
  &:hover {
    img {
      height: 150px;
    }
  }
  img {
    position: absolute;
    right: -60px;
    bottom: -50px;
    height: 130px;
    transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
  }
  div {
    position: absolute;
    font-weight: bold;
    font-size: 4vh;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
  }
}
.nav {
  .top {
    position: fixed;
    display: flex;
    width: 100%;
    cursor: pointer;
    z-index: 10;
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
