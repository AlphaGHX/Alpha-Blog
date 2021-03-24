<template>
  <div class="nav">
    <div class="top">
      <div class="blog" :style="blogStyle" @click="toBlog"></div>
      <div class="tools" :style="toolsStyle" @click="toTools"></div>
      <div class="about" :style="aboutStyle" @click="toAbout"></div>
    </div>
    <div style="height: 200vh;"></div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRef } from 'vue'
import $ from 'jquery'
import _ from 'lodash'

export default defineComponent({
  setup() {
    var blogStyle = ref({})
    var toolsStyle = ref({})
    var aboutStyle = ref({})

    const toBlog = function() {
      blogStyle.value = { width: '100vw', height: '100vh' }
      toolsStyle.value = { width: '0' }
      aboutStyle.value = { width: '0' }
      setTimeout(function() {
        blogStyle.value = {}
        toolsStyle.value = {}
        aboutStyle.value = {}
      }, 1000)
    }

    const toTools = function() {
      toolsStyle.value = { width: '100vw', height: '100vh' }
      blogStyle.value = { width: '0' }
      aboutStyle.value = { width: '0' }
      setTimeout(function() {
        blogStyle.value = {}
        toolsStyle.value = {}
        aboutStyle.value = {}
      }, 1000)
    }

    $(window).on('scroll', )

    return {
      toBlog,
      toTools,
      blogStyle,
      toolsStyle,
      aboutStyle
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
  width: 100%;
  height: 20vh;
  background-image: linear-gradient(180deg, $bgc1, $bgc2);
  box-shadow: $sc;
  transition-duration: 0.5s;
  &:hover {
    height: 25vh;
  }
}
.nav {
  .top {
    position: fixed;
    display: flex;
    width: 100%;
    .blog {
      @include topBtn(#fff5f9 0%, #ffeaf2 70%, 0 2px 20px 2px #ffe2ed);
    }
    .tools {
      @include topBtn(#ebf7ff 0%, #d1edff 70%, 0 2px 20px 2px #c9e9ff);
    }
    .about {
      @include topBtn(#f8eeff 0%, #f1dbff 70%, 0 2px 20px 2px #edd2ff);
    }
  }
}
</style>
