<template>
  <div class="main">
    <div class="box">
      <div class="main-left">
        <transition name="fade" mode="out-in">
          <SideBar class="side-bar" v-if="leftSW" :data="sideBarData" />
          <SideBar class="side-bar-toc" v-else :data="tocData" />
        </transition>
      </div>
      <div class="main-right">
        <transition name="fade" mode="out-in">
          <BlogItemList
            class="blog-item-list"
            v-if="rightSW"
            :data="blogItemData"
            @update-list="updateList"
            @update-content="updateContent"
          />
          <BlogContent
            class="blog-content"
            v-else
            :data="contentData"
            :markdownData="markdownData"
          />
        </transition>
      </div>
    </div>
    <TreeList :data="treeListData" :rank="1" v-slot="slotProps">
      <div>{{ slotProps.item.text }}</div>
    </TreeList>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { sideBarData, blogItemDataFake, treeListData } from '@/utils/FakeDatas'
import { getMarkdownData, getSideBarTocData } from '@/utils/Tools'
import BlogItemList from '@/components/BlogItemList.vue'
import BlogContent from '@/components/BlogContent.vue'
import BlogItemData from '@/models/BlogItemData'
import SideBar from '@/components/SideBar.vue'
import TreeList from '@/components/TreeList.vue'
import router from '@/router'
import { onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  name: 'Blog',
  setup() {
    const leftSW = ref(true)
    const rightSW = ref(true)
    const contentData = ref({})
    const markdownData = ref('')
    const blogItemData = reactive(blogItemDataFake)
    const tocData = ref({})

    onBeforeRouteUpdate((to) => {
      if (to.params.name === 'list') {
        leftSW.value = true
        rightSW.value = true
      } else {
        leftSW.value = false
        rightSW.value = false
      }
    })

    function updateList(b: BlogItemData[]) {
      blogItemData.length = 0
      b.forEach(function(_, index) {
        blogItemData[index] = b[index]
      })
    }

    function updateContent(i: number) {
      contentData.value = blogItemData[i]
      getMarkdownData(blogItemData[i].contentSrc)
        .then((value) => {
          markdownData.value = value.markdownData as string
          console.log(value.tocData)
          tocData.value = getSideBarTocData(value.tocData)
        })
        .then(() => {
          router.push({ path: `/blog/${blogItemData[i].title}` })
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return {
      updateList,
      updateContent,
      contentData,
      markdownData,
      sideBarData,
      blogItemData,
      tocData,
      leftSW,
      rightSW,
      treeListData
    }
  },
  components: {
    SideBar,
    BlogItemList,
    BlogContent,
    TreeList
  }
})
</script>

<style lang="scss" scoped>
.main {
  @include vueTransition;
  padding-top: 160px;
  .side-bar-main {
    position: sticky;
    top: 80px;
  }
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
        min-width: 0;
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
