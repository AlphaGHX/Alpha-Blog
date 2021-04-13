<template>
  <div class="main">
    <div class="box">
      <div class="topImg"><img :src="topImgSrc" alt="topImg" /></div>
      <div class="name">{{ name }}</div>
      <div class="contact">
        <div class="contact-img" v-for="(item, index) of contacts" :key="index">
          <!-- <img
            :src="require('../assets/svg/' + item + '.svg')"
            alt="contactIcon"
          /> -->
          <svg-icon :name="item"></svg-icon>
        </div>
      </div>
      <div class="content">
        <template v-for="(item, index) of contents" :key="index">
          <div class="content-item" @click="itemClick(index)">
            <svg-icon :name="item.icon"></svg-icon>
            <div class="content-item-title">{{ item.title }}</div>
            <svg-icon :style="item.hideStyleNext" name="下一个"></svg-icon>
          </div>
          <template v-if="item.hasHide">
            <div
              class="content-hideItem"
              v-for="(itemH, indexH) of item.hideItem"
              :key="indexH"
              :style="item.hideStyle"
              @click="hideItemClick(index, indexH)"
            >
              <svg-icon name="star"></svg-icon>
              <div class="content-hideItem-title">{{ itemH.title }}</div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRef, toRefs } from 'vue'

export interface SideBarData {
  contacts: string[]
  contents: {
    title: string
    icon: string
    hasHide: boolean
    hideStyle: {
      height: string
      opacity: number
    }
    hideStyleNext: {
      transform: string
    }
    hideItem?: {
      title: string
    }[]
  }[]
}

export default defineComponent({
  name: 'SideBar',
  setup() {
    var topImgSrc = 'https://via.placeholder.com/70x70'
    var name = 'Alpha'

    var sideBarData: SideBarData = reactive({
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
    })

    var contents = toRef(sideBarData, 'contents')
    var contacts = toRef(sideBarData, 'contacts')

    const itemClick = function(x: number) {
      if (contents.value[x].hideStyle.opacity === 0) {
        contents.value[x].hideStyle = {
          height: '40px',
          opacity: 1
        }
        contents.value[x].hideStyleNext = { transform: 'rotate(90deg)' }
      } else {
        contents.value[x].hideStyle = {
          height: '0px',
          opacity: 0
        }
        contents.value[x].hideStyleNext = { transform: 'rotate(0deg)' }
      }
    }

    const hideItemClick = function(x: number, y: number) {
      alert(x + ', ' + y)
    }

    return {
      topImgSrc,
      name,
      contacts,
      contents,
      hideItemClick,
      itemClick
    }
  }
})
</script>

<style lang="scss" scoped>
$mainTextColor: #d5769c;
$TextColot: #ce8ca6;
@mixin btn() {
  transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
  cursor: pointer;
  &:hover {
    background-color: #ffe5f0;
  }
}
.main {
  .box {
    margin-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
    box-shadow: 0px 2px 20px 2px #ffe2ed;
    .topImg {
      transform: translate(0, -50%);
      img {
        height: 70px;
      }
    }
    .name {
      margin-top: -20px;
      color: $mainTextColor;
      font-size: 30px;
    }
    .contact {
      padding-top: 10px;
      display: flex;
      height: 40px;
      .contact-img {
        text-align: center;
        width: 100%;
        line-height: 50px;
        @include btn();
      }
      // img {
      //   height: 20px;
      // }
      svg {
        height: 20px;
      }
    }
    .content {
      padding: 20px 0;
      .content-item {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
        color: $TextColot;
        @include btn();
        .content-item-title {
          font-size: 15px;
          font-weight: bold;
          width: 100%;
          margin-left: 10px;
        }
        svg {
          height: 20px;
          width: 20%;
          transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
        }
      }
      .content-hideItem {
        padding-left: 5%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
        color: $TextColot;
        opacity: 1;
        overflow: hidden;
        @include btn();
        .content-hideItem-title {
          font-size: 15px;
          font-weight: bold;
          width: 100%;
          margin-left: 10px;
        }
        svg {
          width: 20%;
          height: 20px;
        }
      }
    }
  }
}
</style>
