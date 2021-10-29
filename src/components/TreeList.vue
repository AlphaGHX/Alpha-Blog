<template>
  <div v-for="(item, index) of data" :key="index">
    <div class="content-item" @click.stop="itemClick(index)">
      <svg-icon :name="item.icon || 'star'"></svg-icon>
      <div class="content-item-title">{{ item.title }}</div>
      <svg-icon
        v-if="item.hideItem"
        :class="{ 'svg-active': isActive[index] }"
        name="arrow"
      ></svg-icon>
    </div>
    <div
      v-if="item.hideItem"
      :style="activeStyle[index]"
      class="content-hideItem"
      style="padding-left: 10px;"
    >
      <TreeList :data="item.hideItem" :rank="rank + 1"> </TreeList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
    const activeStyle = ref<{ height: string; opacity: number }[]>([
      { height: '0', opacity: 0 }
    ])
    const data = props.data as {
      title: string
      icon: string
      isActive: boolean
      hideItem: {
        title: string
        isActive: boolean
        hideItem: {
          title: string
        }[]
      }[]
    }[]
    const rank = props.rank as number

    onMounted(() => {
      data.forEach((_: unknown, index: number) => {
        activeStyle.value.push({ height: '0', opacity: 0 })
        activeStyle.value[index].height = '0px'
        activeStyle.value[index].opacity = 0
      })
    })

    function itemClick(index: number) {
      if (!isActive.value[index]) {
        activeStyle.value[index].height =
          data[index].hideItem?.length * 40 + 'px'
        activeStyle.value[index].opacity = 1
      } else {
        activeStyle.value[index].height = '0px'
        activeStyle.value[index].opacity = 0
      }
      isActive.value[index] = !isActive.value[index]
    }

    // eslint-disable-next-line vue/no-dupe-keys
    return { itemClick, isActive, activeStyle, data, rank }
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
  overflow: hidden;
}
</style>
