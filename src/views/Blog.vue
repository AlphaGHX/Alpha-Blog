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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '../components/SideBar.vue'
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
  .box {
    margin: 0 auto;
    width: 1500px;
    display: flex;
    justify-content: space-between;
    .main-left {
      .side-bar {
        width: 300px;
      }
    }
    .main-right {
      .blog-item {
        width: 1100px;
      }
    }
  }
}
</style>
