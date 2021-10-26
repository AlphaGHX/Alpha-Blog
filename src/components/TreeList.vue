<template>
  <div>
    <div v-for="(item, index) of data" :key="index">
      <slot :item="item" :index="index"></slot>
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
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TreeList',
  props: {
    data: Object,
    rank: Number
  }
})
</script>

<style lang="scss" scoped></style>
