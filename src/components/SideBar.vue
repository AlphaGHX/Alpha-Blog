<template>
  <div class="main">
    <div class="box">
      <div class="topImg"><img :src="topImgSrc" alt="topImg" /></div>
      <div class="name">{{ name }}</div>
      <div class="contact">
        <div v-for="(item, index) of contacts" :key="index">
          <img :src="item" alt="contactIcon" />
        </div>
      </div>
      <div class="content">
        <template v-for="(item, index) of contents" :key="index">
          <div class="content-item">
            <img :src="item.Icon" alt="itemIcon" />
            <div class="content-item-title">{{item.title}}</div>
            <img :src="arrowIcon" alt="arrowIcon" />
          </div>
          <div class="content-hideItem">
            <img :src="item.Icon" alt="itemIcon" />
            <div class="content-item-title">{{item.title}}</div>
            <img :src="arrowIcon" alt="arrowIcon" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  setup() {
    var topImgSrc = ''
    var name = 'Alpha'
    var arrowIcon = ''
    var contacts = {
      github: '../assets/svg/github.svg',
      telegram: '../assets/svg/telegram.svg',
      twitter: '../assets/svg/twitter.svg'
    }
    var contents = [
      {
        hasHide: false,
        title: '文章',
        Icon: ''
      },
      {
        hasHide: true,
        title: '归档',
        Icon: ''
      }
    ]

    return {
      topImgSrc,
      name,
      contacts,
      arrowIcon,
      contents
    }
  }
})
</script>

<style lang="scss" scoped>
$mainTextColor: #d5769c;
$TextColot: #ce8ca6;
.main {
  .box {
    left: 40px;
    background: linear-gradient(180deg, #fff5f9cc, #ffeaf2cc);
    box-shadow: 0px 2px 20px 2px #ffe2ed;
    .topImg {
      transform: translate(0, 50%);
      img {
        height: 70px;
      }
    }
    .name {
      color: $mainTextColor;
      font-size: 40px;
    }
    .contact {
      display: flex;
      justify-content: space-around;
      img {
        height: 25px;
        color: $TextColot;
      }
    }
    .content {
      .content-item {
        .content-item-title {
        }
      }
      .content-hideItem {
        .content-item-title {
        }
      }
    }
  }
}
</style>
