<template>
  <div v-for="(item, index) of data" :key="index">
    <div class="content-item" @click.stop="itemClick(index)">
      <svg-icon v-if="item.topImgSrc" :name="item.icon || 'star'"></svg-icon>
      <div class="content-item-title">{{ item.title }}</div>
      <svg-icon
        v-if="item.hideItem"
        :class="{ 'svg-active': isActive }"
        name="arrow"
      ></svg-icon>
    </div>
    <TreeList
      v-if="item.hideItem"
      :data="item.hideItem"
      :rank="rank + 1"
      style="padding-left: 10px;"
    >
    </TreeList>
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
    const isActive = ref({})

    function itemClick(item: number) {
      console.log(item)
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
  overflow: hidden;
  height: 0;
  opacity: 0;
}
</style>
