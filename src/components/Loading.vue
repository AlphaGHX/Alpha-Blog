<template>
  <div class="loading-main">
    <svg-icon name="LineOutLoading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  name: 'Loading',
  components: {
    SvgIcon
  }
})
</script>

<style lang="scss" scoped>
.loading-main {
  svg {
    animation: round 1s infinite linear;
  }
  @keyframes round {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
