<template>
  <div class="Main">
    <side-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '../components/SideBar.vue'

export default defineComponent({
  name: 'Blog',
  components: {
    SideBar
  }
})
</script>
