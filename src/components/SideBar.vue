<template>
  <div class="side-bar-main">
    <div class="box">
      <div class="topImg" v-if="topImgSrc">
        <img :src="topImgSrc" alt="topImg" />
      </div>
      <div class="name" v-if="name">{{ name }}</div>
      <div class="contact" v-if="contacts">
        <div class="contact-img" v-for="(item, index) of contacts" :key="index">
          <svg-icon :name="item"></svg-icon>
        </div>
      </div>
      <div class="content">
        <template v-for="(item, index) of contents" :key="index">
          <div class="content-item" @click="itemClick(index)">
            <svg-icon v-if="topImgSrc" :name="item.icon || 'star'"></svg-icon>
            <div class="content-item-title">{{ item.title }}</div>
            <svg-icon
              v-if="item.hideItem.length"
              :class="{ 'svg-active': item.isActive }"
              name="arrow"
            ></svg-icon>
          </div>
          <template v-if="item.hideItem.length">
            <template v-for="(itemH, indexH) of item.hideItem" :key="indexH">
              <div
                class="content-item"
                @click="itemClick(index, indexH)"
                :class="{ 'content-hideItem': !item.isActive }"
                style="padding-left: 10px"
              >
                <svg-icon
                  v-if="topImgSrc"
                  :name="itemH.icon || 'star'"
                ></svg-icon>
                <div class="content-item-title">{{ itemH.title }}</div>
                <svg-icon
                  v-if="itemH.hideItem.length"
                  :class="{ 'svg-active': itemH.isActive }"
                  name="arrow"
                ></svg-icon>
              </div>
              <template v-if="itemH.hideItem.length">
                <template
                  v-for="(itemHH, indexHH) of itemH.hideItem"
                  :key="indexHH"
                >
                  <div
                    class="content-item"
                    @click="itemClick(index, indexH, indexHH)"
                    :class="{ 'content-hideItem': !itemH.isActive }"
                    style="padding-left: 20px"
                  >
                    <svg-icon
                      v-if="topImgSrc"
                      :name="itemHH.icon || 'star'"
                    ></svg-icon>
                    <div class="content-item-title">{{ itemHH.title }}</div>
                  </div>
                </template>
              </template>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { SideBarData } from '@/hooks/Types'

export default defineComponent({
  name: 'SideBar',
  props: {
    data: Object
  },
  setup(props) {
    const { topImgSrc = null, name = null, contacts = null, contents } = toRefs(
      reactive(props.data as SideBarData)
    )

    if (contents.value.length <= 2) {
      setTimeout(() => {
        contents.value.forEach((value) => {
          value.isActive = !value.isActive
        })
      }, 100)
    }

    const itemClick = function(...args: Array<number>) {
      if (args.length === 1) {
        console.log(args)
        contents.value[args[0]].isActive = !contents.value[args[0]].isActive
        const itemH = contents.value[args[0]].hideItem
        if (itemH) {
          itemH.forEach((item) => {
            if (item.isActive) item.isActive = false
          })
        }
      } else if (args.length === 2) {
        console.log(args)
        const itemH = contents.value[args[0]].hideItem
        if (itemH) {
          itemH[args[1]].isActive = !itemH[args[1]].isActive
        }
      } else {
        console.log(args)
      }
    }

    return {
      topImgSrc,
      name,
      contacts,
      contents,
      itemClick
    }
  }
})
</script>

<style lang="scss" scoped>
.side-bar-main {
  .box {
    padding-left: 30px;
    padding-right: 30px;
    @include pinkBG;
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
        @include btn();
        svg {
          height: 40px;
          color: $TextColor;
        }
      }
    }
    .content {
      padding: 20px 0;
      .content-item {
        height: 40px;
        display: flex;
        align-items: center;
        line-height: 40px;
        color: $TextColor;
        @include btn();
        .content-item-title {
          flex: 1;
          padding-left: 5px;
          font-size: 16px;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        svg {
          height: 20px;
          padding: 0 5px;
          transform: rotate(0deg);
          transition: 0.5s cubic-bezier(0.6, 0, 0, 1);
        }
        .svg-active {
          transform: rotate(90deg);
        }
      }
      .content-hideItem {
        overflow: hidden;
        height: 0;
        opacity: 0;
      }
    }
  }
}
</style>
