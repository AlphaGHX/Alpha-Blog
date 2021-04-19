<template>
  <div class="main">
    <div class="box">
      <div class="main-left">
        <side-bar class="side-bar" :data="sideBarData" />
      </div>

      <div class="main-right">
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
        <blog-item class="blog-item" :data="blogItemData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import BlogItem from '@/components/BlogItem.vue'
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
    BlogItem,
    SideBar
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding-top: px2em(160px);
  @media screen and (min-width: 1300px) {
    .box {
      margin: 0 auto;
      width: px2em(1200px);
      display: flex;
      .main-left {
        width: px2em(300px);
        flex-shrink: 0;
      }
      .main-right {
        padding-left: px2em(50px);
      }
    }
  }
  @media screen and (max-width: 1300px) and (min-width: 900px) {
    .box {
      margin: 0 auto;
      width: 80%;
      display: flex;
      .main-left {
        width: px2em(300px);
        flex-shrink: 0;
      }
      .main-right {
        padding-left: px2em(50px);
      }
    }
  }
  @media screen and (max-width: 900px) and (min-width: 400px) {
    .box {
      margin: 0 auto;
      width: 80%;
      .main-left {
        width: px2em(300px);
        padding-bottom: px2em(50px);
      }
    }
  }
  @media screen and (max-width: 400px) {
    .box {
      margin: 0 auto;
      width: 300px;
      .main-left {
        padding-bottom: px2em(50px);
      }
    }
  }
}
</style>
