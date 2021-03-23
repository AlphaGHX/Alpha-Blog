<template>
  <div class="nav">
    <div class="blog"></div>
    <div class="tools"></div>
    <div class="about"></div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, toRef, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log(1)
    })
  }
})
</script>

<style lang="scss">
.nav {
  position: fixed;
  display: flex;
  height: 300px;
  width: 100%;
  .blog {
    flex-grow: 1;
    background-image: linear-gradient(
      180deg,
      rgba(255, 245, 249, 0.7) 0%,
      rgba(255, 234, 242, 0.7) 100%
    );
    box-shadow: 0 2px 20px 2px #ffe2ed;
  }
  .tools {
    flex-grow: 1;
    background-image: linear-gradient(180deg, #ebf7ff 0%, #d1edff 100%);
    box-shadow: 0 2px 20px 2px #c9e9ff;
  }
  .about {
    flex-grow: 1;
    background-image: linear-gradient(180deg, #f8eeff 0%, #f1dbff 100%);
    box-shadow: 0 2px 20px 2px #edd2ff;
  }
}
</style>
