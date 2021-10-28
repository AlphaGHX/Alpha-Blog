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
      class="content-hideItem"
      :class="{ 'content-showItem': !isActive[index] }"
      style="padding-left: 10px;"
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
import $ from 'jquery'
export default defineComponent({
  components: { SvgIcon },
  name: 'TreeList',
  props: {
    data: Object,
    rank: Number
  },
  setup(props, { emit }) {
    const isActive = ref([false])
    const activeStyle = ref([{}])
    const data = props.data as any

    function itemClick(index: number) {
      $('.content-showItem').css(
        'height',
        data[index].hideItem.length * 40 + 'px'
      )
      $('.content-showItem').css('opacity', 1)
      isActive.value[index] = !isActive.value[index]
    }
    return { itemClick, isActive }
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
  height: 0;
  opacity: 0;
}
</style>
