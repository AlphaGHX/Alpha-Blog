<template>
  <div class="main">
    <div class="box">
      <div class="main-left">
        <transition name="fade" mode="out-in">
          <SideBar class="side-bar" v-if="leftSW" :data="sideBarData" />
          <SideBar class="side-bar-toc" v-else :data="$store.state.tocData" />
        </transition>
      </div>
      <div class="main-right">
        <transition name="fade" mode="out-in">
          <BlogItemList class="blog-item-list" v-if="rightSW" :data="blogItemData" />
          <BlogContent class="blog-content" v-else :data="getTop" />
        </transition>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import SideBar from '@/components/SideBar.vue'
import BlogItemList from '@/components/BlogItemList.vue'
import BlogContent from '@/components/BlogContent.vue'
import { sideBarData, blogItemData } from '@/hooks/fakeDatas'
import store from '@/store'
import router from '@/router'

export default defineComponent({
  name: 'Blog',
  setup() {
    const leftSW = ref(true)
    const rightSW = ref(true)
    const getTop = ref(blogItemData[0])

    watch(router.currentRoute, (value, oldValue) => {
      console.log(value.params, oldValue.params)
      if (value.params.name === 'list') {
        leftSW.value = true
        rightSW.value = true
      } else {
        leftSW.value = false
        rightSW.value = false
        getTop.value = blogItemData[store.state.blogItem.index]
      }
    })

    return {
      sideBarData,
      blogItemData,
      getTop,
      leftSW,
      rightSW
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
  @include vueTransition;
  padding-top: 160px;
  @media screen and (min-width: 1625px) {
    .box {
      margin: 0 auto;
      width: 1300px;
      display: flex;
      .main-left {
        width: 260px;
      }
      .main-right {
        flex: 1;
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
        width: 260px;
      }
      .main-right {
        flex: 1;
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
        width: 240px;
      }
      .main-right {
        flex: 1;
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
