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
  padding-top: 16vh;
  @media screen and (min-width: 1200px) {
    .box {
      margin: 0 auto;
      width: px2em(1200px);
      display: flex;
      justify-content: space-between;
      .main-left {
        width: px2em(300px);
      }
      .main-right {
        width: px2em(800px);
      }
    }
  }
  @media screen and (max-device-width: 1200px) {
    .box {
      margin: 0 auto;
      width: px2em(800px);
      .main-left {
        width: px2em(800px);
      }
      .main-right {
        width: px2em(800px);
      }
    }
  }
}
</style>
