<template>
  <div class="blog-content-main">
    <div class="box">
      <div class="box-img">
        <img :src="" alt="IMG">
      </div>
      <div class="box-title">
        <div class="box-title-content">{{  }}</div>
        <div class="box-title-tag"></div>
      </div>
      <div class="box-content">
        <h1>MD解析器</h1>
        <h2>TEST</h2>
        <p>TEST</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogContent',
  setup(props) {
  }
})
</script>

<style lang="scss" scoped>
.blog-content-main {
  .box {
    .box-img {

    }
    .box-title {
      
    }
  }
}
</style>
