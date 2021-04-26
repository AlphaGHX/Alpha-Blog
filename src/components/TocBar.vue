<template>
  <div class="side-bar-main">
    <div class="box">
      <div class="content">
        <template v-for="(item, index) of contents" :key="index">
          <div class="content-item" @click="itemClick(index)">
            <svg-icon :name="item.icon"></svg-icon>
            <div class="content-item-title">{{ item.title }}</div>
            <svg-icon
              :class="{ 'svg-active': item.isActive }"
              name="arrow"
            ></svg-icon>
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
import store from '@/store'

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
    padding-left: 40px;
    padding-right: 40px;
    @include pinkBG;
    .content {
      padding: 20px 0;
      .content-item,
      .content-hideItem,
      .content-hideItem-active {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
        color: $TextColor;
        @include btn();
        .content-item-title,
        .content-hideItem-title {
          font-size: 16px;
          font-weight: bold;
          width: 100%;
          margin-left: 10px;
        }
        svg {
          height: 20px;
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
        height: 40px;
        opacity: 1;
      }
    }
  }
}
</style>
