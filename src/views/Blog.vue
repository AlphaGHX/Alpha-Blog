<template>
  <div class="main">
    <div class="box">
      <div class="main-left">
        <SideBar class="side-bar-toc" :data="sideBarTocData" />
        <div style="height: 100px"></div>
        <SideBar class="side-bar" :data="sideBarData" />
      </div>

      <div class="main-right">
        <BlogContent class="blog-content" :data="getTop" />
        <BlogItemList class="blog-item-list" :data="blogItemData" />
      </div>

      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import SideBar from '@/components/SideBar.vue'
import BlogItemList from '@/components/BlogItemList.vue'
import BlogContent from '@/components/BlogContent.vue'
import { sideBarData, sideBarTocDataEX, blogItemData } from '@/hooks/fakeDatas'
import store from '@/store'

export default defineComponent({
  name: 'Blog',
  setup() {
    const sideBarTocData = reactive({ contents: {} })
    // setTimeout(() => {
    //   sideBarTocData.contents = sideBarTocDataEX().contents
    //   console.log(sideBarTocData)
    // }, 2000)

    watch(store.state.tocData, (value, oldValue) => {
      sideBarTocData.contents = sideBarTocDataEX().contents
    })

    const getTop = blogItemData[0]

    return {
      sideBarData,
      blogItemData,
      sideBarTocData,
      getTop
    }
  },
  components: {
    SideBar,
    BlogItemList,
    BlogContent
  }
})
</script>

<style lang="scss" scoped>
.main {
  div {
    @include transition;
  }
  padding-top: 160px;
  @media screen and (min-width: 1625px) {
    .box {
      margin: 0 auto;
      width: 1300px;
      display: flex;
      .main-left {
        max-width: 260px;
      }
      .main-right {
        width: 1000px;
        padding-left: 50px;
      }
    }
  }
  @media screen and (max-width: 1625px) and (min-width: 1300px) {
    .box {
      margin: 0 auto;
      width: 80%;
      display: flex;
      .main-left {
        max-width: 260px;
      }
      .main-right {
        min-width: 0;
        padding-left: 50px;
      }
    }
  }
  @media screen and (max-width: 1300px) and (min-width: 900px) {
    .box {
      margin: 0 auto;
      width: 80%;
      display: flex;
      .main-left {
        max-width: 240px;
      }
      .main-right {
        min-width: 0;
        padding-left: 50px;
      }
    }
  }
  @media screen and (max-width: 900px) and (min-width: 375px) {
    .box {
      margin: 0 auto;
      width: 80%;
      .main-left {
        width: 300px;
        padding-bottom: 50px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .box {
      margin: 0 auto;
      width: 300px;
      .main-left {
        padding-bottom: 50px;
      }
    }
  }
}
</style>
