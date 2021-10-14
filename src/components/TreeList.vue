<template>
  <div>
    <div v-for="(item, index) of data" :key="index">
      <div>{{ item.text }}</div>
      <TreeList v-if="item.hideItem" :data="item.hideItem" style="padding-left: 10px;"></TreeList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TreeList',
  props: {
    data: Object
  }
})
</script>

<style lang="scss" scoped>

</style>
