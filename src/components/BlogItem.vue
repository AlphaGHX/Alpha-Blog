<template>
  <div class="blog-item-main">
    <div @click="blogItemClick" class="box">
      <div class="main-img">
        <img :src="imgSrc" alt="IMG" />
      </div>
      <div class="main-content">
        <div class="main-content-title">{{ title }}</div>
        <div class="main-content-text">{{ text }}</div>
        <div class="main-content-tag">
          <transition name="fade">
            <div class="main-content-tag-item" v-if="isLoading">
              <div>载入...</div>
              <Loading class="main-content-tag-item" />
            </div>
          </transition>
          <template v-for="(item, index) of tag" :key="index">
            <div class="main-content-tag-item" @click.stop="">
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
import { defineComponent, ref } from 'vue'
import BlogItemData from '@/models/BlogItemData'
import store from '@/store'
import router from '@/router'
import { getMarkdownData } from '@/utils/Tools'
import Loading from '@/components/Loading.vue'

export default defineComponent({
  name: 'BlogItem',
  props: {
    data: Object,
    index: Number
  },
  setup(props) {
    const blogItemData: BlogItemData = props.data as BlogItemData

    const { imgSrc, title, contentSrc, text, tag } = blogItemData

    const isLoading = ref(false)

    function blogItemClick() {
      isLoading.value = true
      getMarkdownData(contentSrc)
        .then((value) => {
          store.commit('setMarkdownData', value)
        })
        .then(() => store.commit('setNowPage', props.index))
        .then(() => {
          isLoading.value = false
          router.push({ path: '/blog/' + title })
        })
    }

    return {
      imgSrc,
      title,
      text,
      tag,
      blogItemClick,
      isLoading
    }
  },
  components: {
    Loading
  }
})
</script>

<style lang="scss" scoped>
.blog-item-main {
  @include vueFadeTransition;
  @media screen and (min-width: 1300px) {
    .box {
      margin-bottom: 50px;
      display: flex;
      height: 200px;
      @include pinkBG;
      cursor: pointer;
      @include transition;
      &:hover {
        box-shadow: 0px 1px 10px 1px #ffe2ed;
        @include transition;
      }
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
          font-weight: bold;
          .main-content-tag-item {
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
    }
  }
  @media screen and (max-width: 1300px) {
    .box {
      margin-bottom: 50px;
      background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
      box-shadow: 0px 2px 20px 2px #ffe2ed;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 1px 10px 1px #ffe2ed;
      }
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
          font-weight: bold;
          .main-content-tag-item {
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
    }
  }
}
</style>
