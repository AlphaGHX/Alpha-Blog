<template>
  <div>
    <template v-for="(item, index) of data" :key="index">
      <BlogItemData :data="item" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogItemData from '@/components/BlogItem.vue'

export default defineComponent({
  name: 'BlogItemList',
  props: {
    data: Array
  },
  components: {
    BlogItemData
  }
})
</script>
