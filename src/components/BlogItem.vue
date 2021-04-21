<template>
  <div class="blog-item-main">
    <div class="box">
      <div class="main-img">
        <img :src="imgSrc" alt="IMG" />
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
    <router-view />
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
.blog-item-main {
  @media screen and (min-width: 1300px) {
    .box {
      margin-bottom: 50px;
      display: flex;
      height: 200px;
      @include pinkBG;
      .main-img {
        height: 200px;
        width: 300px;
        flex-shrink: 0;
        overflow: hidden;
        & > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .main-content {
        position: relative;
        width: 100%;
        .main-content-title {
          padding: 20px;
          color: $mainTextColor;
          font-size: 30px;
          font-weight: bold;
        }
        .main-content-text {
          padding: 0 20px;
          color: $TextColor;
          font-size: 20px;
        }
        .main-content-tag {
          position: absolute;
          display: flex;
          bottom: 20px;
          right: 20px;
          color: $TextColor;
          font-size: 15px;
          .main-content-tag-item {
            display: flex;
            align-items: center;
            padding: 0 10px;
            div {
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .box {
      margin-bottom: 50px;
      background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
      box-shadow: 0px 2px 20px 2px #ffe2ed;
      .main-img {
        height: 200px;
        overflow: hidden;
        & > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .main-content {
        position: relative;
        .main-content-title {
          padding: 20px;
          color: $mainTextColor;
          font-size: 30px;
          font-weight: bold;
        }
        .main-content-text {
          padding: 0 20px;
          padding-bottom: 20px;
          color: $TextColor;
          font-size: 20px;
        }
        .main-content-tag {
          padding: 10px;
          display: flex;
          color: $TextColor;
          font-size: 15px;
          .main-content-tag-item {
            display: flex;
            align-items: center;
            padding: 0 5px;
            div {
              padding: 0 2px;
            }
          }
        }
      }
    }
  }
}
</style>
