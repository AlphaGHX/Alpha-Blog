<template>
  <div class="side-bar-main">
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
            <svg-icon :class="{ 'svg-active': item.isActive }" name="下一个"></svg-icon>
          </div>
          <template v-if="item.hasHide">
            <div
              class="content-hideItem"
              :class="{ 'content-hideItem-active': item.isActive }"
              v-for="(itemH, indexH) of item.hideItem"
              :key="indexH"
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
import { defineComponent, reactive, toRef } from 'vue'
import { SideBarData } from '@/hooks/Types'

export default defineComponent({
  name: 'SideBar',
  props: {
    data: Object
  },
  setup(props) {
    const sideBarData: SideBarData = props.data as SideBarData
    const sideBarDataReactive = reactive(sideBarData)

    const topImgSrc = toRef(sideBarDataReactive, 'topImgSrc')
    const name = toRef(sideBarDataReactive, 'name')
    const contents = toRef(sideBarDataReactive, 'contents')
    const contacts = toRef(sideBarDataReactive, 'contacts')

    const itemClick = function(x: number) {
      contents.value[x].isActive = !contents.value[x].isActive
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
.side-bar-main {
  .box {
    padding-left: px2em(40px);
    padding-right: px2em(40px);
    background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
    box-shadow: 0px 2px 20px 2px #ffe2ed;
    .topImg {
      transform: translate(0, -50%);
      img {
        height: px2em(70px);
      }
    }
    .name {
      margin-top: px2em(-20px);
      color: $mainTextColor;
      font-size: px2em(40px);
    }
    .contact {
      padding-top: px2em(10px);
      display: flex;
      height: px2em(40px);
      .contact-img {
        text-align: center;
        width: 100%;
        line-height: px2em(50px);
        @include btn();
      }
      svg {
        height: px2em(20px);
      }
    }
    .content {
      padding: px2em(20px) 0;
      .content-item,
      .content-hideItem,
      .content-hideItem-active {
        height: px2em(40px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: px2em(40px);
        color: $TextColor;
        @include btn();
        .content-item-title,
        .content-hideItem-title {
          font-size: px2em(20px);
          font-weight: bold;
          width: 100%;
          margin-left: px2em(10px);
        }
        svg {
          height: px2em(20px);
          width: 20%;
          transform: rotate(0deg);
          transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
        }
        .svg-active {
          transform: rotate(90deg);
        }
      }
      .content-hideItem {
        padding-left: 5%;
        overflow: hidden;
        height: 0;
        opacity: 0;
      }
      .content-hideItem-active {
        height: px2em(40px);
        opacity: 1;
      }
    }
  }
}
</style>
