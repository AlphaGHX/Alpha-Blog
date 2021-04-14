<template>
  <div class="blog-item-main">
    <div class="box">
      <div class="main-img">
        <img :src="imgSrc" alt="IMG" style="width: 100%; height: 100%" />
      </div>
      <div class="main-content">
        <div class="main-content-title">{{ title }}</div>
        <div class="main-content-text">{{ text }}</div>
        <div class="main-content-tag">
          <template v-for="(item, index) of tag" :key="index">
            <div class="main-content-tag-item">
              <div>{{ item.tagName }}</div>
              <svg-icon :name="item.icon"></svg-icon>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BlogItemData } from '@/hooks/Types'

export default defineComponent({
  name: 'BlogItem',
  props: {
    data: Object
  },
  setup(props) {
    const blogItemData: BlogItemData = props.data as BlogItemData

    const { imgSrc, title, text, tag } = blogItemData

    return {
      imgSrc,
      title,
      text,
      tag
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin btn() {
  transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
  cursor: pointer;
  &:hover {
    background-color: #ffe5f0;
  }
}
.blog-item-main {
  .box {
    margin-bottom: 50px;
    display: flex;
    height: px2em(200px);
    background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
    box-shadow: 0px 2px 20px 2px #ffe2ed;

    .main-img {
      width: px2em(300px);
    }
    .main-content {
      width: px2em(700px);
      position: relative;
      .main-content-title {
        padding: px2em(20px);
        color: $mainTextColor;
        font-size: px2em(30px);
        font-weight: bold;
      }
      .main-content-text {
        padding: 0 px2em(20px);
        color: $TextColor;
        font-size: px2em(20px);
      }
      .main-content-tag {
        position: absolute;
        display: flex;
        bottom: px2em(20px);
        right: px2em(20px);
        color: $TextColor;
        font-size: px2em(15px);
        .main-content-tag-item {
          display: flex;
          align-items: center;
          padding: 0 px2em(10px);
          div {
            padding: 0 px2em(5px);
          }
        }
      }
    }
  }
}
</style>
