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
        <MarkDown />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MarkDown from '@/components/MarkDown.vue'

export default defineComponent({
  name: 'BlogContent',
  props: {
    data: Object
  },
  components: {
    MarkDown
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
        height: 400px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .box-title {
        transform: translate(0, -25%);
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
          font-weight: bold;
          .box-title-tag-item {
            @include btn;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0 10px;
            div {
              padding: 0 5px;
            }
          }
        }
      }
      .box-content {
        padding: 0 20px 20px 20px;
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
        transform: translate(0, -25%);
        background-color: #fffc;
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
          font-weight: bold;
          .box-title-tag-item {
            @include btn;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0 5px;
            div {
              padding: 0 2px;
            }
          }
        }
      }
      .box-content {
        padding: 0 20px 20px 20px;
      }
    }
  }
}
</style>
