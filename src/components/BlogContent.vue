<template>
  <div class="blog-content-main">
    <div class="box">
      <div class="box-img">
        <img :src="data.imgSrc" alt="IMG" />
      </div>
      <div class="box-title">
        <div class="box-title-content">{{ data.title }}</div>
        <div class="box-title-tag">
          <template v-for="(item, index) of tag" :key="index">
            <div class="box-title-tag-item">
              <div>{{ item.tagName }}</div>
              <svg-icon :name="item.icon"></svg-icon>
            </div>
          </template>
        </div>
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
  props: {
    data: Object
  }
})
</script>

<style lang="scss" scoped>
.blog-content-main {
  .box {
    .box-img {
      height: 400px;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .box-title {
      .box-title-content {
        height: 200px;
      }
      .box-title-tag {
        .box-title-tag-item {

        }
      }
    }
  }
}
</style>
