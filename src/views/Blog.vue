<template>
  <div class="main">
    <div class="box">
      <div class="main-left">
        <SideBar class="side-bar" :data="sideBarData" />
      </div>

      <div class="main-right">
        <BlogItemList class="blog-item-list" :data="blogItemData" />
      </div>

      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import BlogItemList from '@/components/BlogItemList.vue'
import { sideBarData, blogItemData } from '@/hooks/fakeDatas'

export default defineComponent({
  name: 'Blog',
  setup() {
    return {
      sideBarData,
      blogItemData
    }
  },
  components: {
    SideBar,
    BlogItemList
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding-top: 160px;
  @media screen and (min-width: 1625px) {
    .box {
      margin: 0 auto;
      width: 1300px;
      display: flex;
      .main-left {
        width: 300px;
        flex-shrink: 0;
      }
      .main-right {
        width: 100%;
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
        width: 300px;
        flex-shrink: 0;
      }
      .main-right {
        width: 100%;
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
        width: 300px;
        flex-shrink: 0;
      }
      .main-right {
        padding-left: 50px;
      }
    }
  }
  @media screen and (max-width: 900px) and (min-width: 400px) {
    .box {
      margin: 0 auto;
      width: 80%;
      .main-left {
        width: 300px;
        padding-bottom: 50px;
      }
    }
  }
  @media screen and (max-width: 400px) {
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
