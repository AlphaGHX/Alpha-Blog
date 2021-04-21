<template>
  <div class="blog-content-main">
    <div class="box">
      <div class="box-img">
        <img :src="data.imgSrc" alt="IMG" />
      </div>
      <div class="box-title">
        <div class="box-title-content">{{ data.title }}</div>
        <div class="box-title-tag">
          <template v-for="(item, index) of data.tag" :key="index">
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
  @media screen and (min-width: 1300px) {
    .box {
      @include pinkBG;
      margin-bottom: 50px;
      .box-img {
        height: 500px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .box-title {
        position: relative;
        transform: translate(0, -50%);
        background-color: #fffc;
        padding-bottom: 40px;
        @include bgBlur;
        .box-title-content {
          font-size: 40px;
          font-weight: bold;
          padding: 20px;
          color: $mainTextColor;
        }
        .box-title-tag {
          position: absolute;
          display: flex;
          bottom: 20px;
          right: 20px;
          color: $TextColor;
          font-size: 15px;
          .box-title-tag-item {
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
  @media screen and (max-width: 1300px) {
    .box {
      @include pinkBG;
      margin-bottom: 50px;
      .box-img {
        height: 300px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .box-title {
        position: relative;
        transform: translate(0, -50%);
        background-color: #fffc;
        padding-bottom: 40px;
        @include bgBlur;
        .box-title-content {
          font-size: 30px;
          font-weight: bold;
          padding: 20px;
          color: $mainTextColor;
        }
        .box-title-tag {
          padding: 10px;
          display: flex;
          color: $TextColor;
          font-size: 15px;
          .box-title-tag-item {
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
