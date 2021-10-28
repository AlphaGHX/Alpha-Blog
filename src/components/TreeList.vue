<template>
  <div v-for="(item, index) of data" :key="index">
    <div class="content-item" @click.stop="itemClick(index)">
      <svg-icon v-if="item.topImgSrc" :name="item.icon || 'star'"></svg-icon>
      <div class="content-item-title">{{ item.title }}</div>
      <svg-icon
        v-if="item.hideItem"
        :class="{ 'svg-active': isActive[index] }"
        name="arrow"
      ></svg-icon>
    </div>
    <div
      :style="activeStyle[index]"
      class="content-hideItem"
    >
      <TreeList
        v-if="item.hideItem"
        :data="item.hideItem"
        :rank="rank + 1"
        style="padding-left: 10px;"
      >
      </TreeList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SvgIcon from './SvgIcon.vue'
export default defineComponent({
  components: { SvgIcon },
  name: 'TreeList',
  props: {
    data: Object,
    rank: Number
  },
  setup(props, { emit }) {
    const isActive = ref([false])
    const activeStyle = ref<any>([{}])
    const data = props.data as any

    function itemClick(index: number) {
      if (isActive.value[index]) {
        activeStyle.value[index].height =
          data[index].hideItem.length * 40 + 'px'
        activeStyle.value[index].opacity = 1
      } else {
        activeStyle.value[index].height = '0px'
        activeStyle.value[index].opacity = 0
      }
      isActive.value[index] = !isActive.value[index]
    }

    return { itemClick, isActive, activeStyle }
  }
})
</script>

<style lang="scss" scoped>
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
  @include transition;
}
</style>
