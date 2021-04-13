<template>
  <div class="main">
    <side-bar class="sideBar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar, { SideBarData } from '../components/SideBar.vue'

export default defineComponent({
  name: 'Blog',
  setup() {
    var getData: SideBarData = {
      contacts: ['github', 'telegram', 'twitter'],
      contents: [
        {
          title: '文章',
          icon: '文章',
          hasHide: true,
          hideStyle: {
            height: '0px',
            opacity: 0
          },
          hideStyleNext: {
            transform: 'rotate(0deg)'
          },
          hideItem: [{ title: '博客' }, { title: '关于' }]
        },
        {
          title: '归档',
          icon: '归档',
          hasHide: true,
          hideStyle: {
            height: '0px',
            opacity: 0
          },
          hideStyleNext: {
            transform: 'rotate(0deg)'
          },
          hideItem: [
            {
              title: '2021'
            },
            {
              title: '2020'
            },
            {
              title: '2019'
            },
            {
              title: '2018'
            },
            {
              title: '2017'
            },
            {
              title: '2016'
            }
          ]
        },
        {
          title: '分类',
          icon: '分类',
          hasHide: true,
          hideStyle: {
            height: '0px',
            opacity: 0
          },
          hideStyleNext: {
            transform: 'rotate(0deg)'
          },
          hideItem: [
            {
              title: '前端'
            },
            {
              title: '后端'
            },
            {
              title: '算法'
            }
          ]
        }
      ]
    }

    return {
      getData
    }
  },
  components: {
    SideBar
  }
})
</script>

<style lang="scss" scoped>
.sideBar {
  width: 300px;
}
</style>
