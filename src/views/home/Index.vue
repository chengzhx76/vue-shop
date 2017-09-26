<template>
  <div class="home">
    <div class="swiper">
      <swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
    </div>
    <div class="msg">
      <cell :title="news" primary="conten" style="height: 20px;">
        <marquee style="margin-left: 10px;">
          <marquee-item v-for="(item, index) in demo04_list" :key="index">{{ item }}</marquee-item>
        </marquee>
      </cell>
    </div>

    <div class="nav">
      <flexbox :gutter="0">
        <flexbox-item v-for="(item, index) in navList" :key="index">
          <shop-nav class="nva-icon" :title="item.title" :src="item.img" :link="item.url"></shop-nav>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Cell, Marquee, MarqueeItem, Flexbox, FlexboxItem } from 'vux'
  import ShopNav from '@/components/ShopNav'

  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  const textList = [
    '义务爱了 完成传奇世界H5-王者归来任务',
    '零哥章魚 完成传奇世界H5-王者归来任务'
  ]

  const navList = [{
    url: '/order',
    img: '../../../static/vegetables.png',
    title: '蔬菜'
  }, {
    url: 'javascript:',
    img: '../../../static/fruit.png',
    title: '水果'
  }, {
    url: 'javascript:',
    img: '../../../static/vegetables.png',
    title: '素材',
  }, {
    url: 'javascript:',
    img: '../../../static/vegetables.png',
    title: '素材',
  }]
  export default {
    data () {
      return {
        demo01_list: baseList,
        demo04_list: textList,
        navList: navList,
        demo02_index: 1,
        goToCell: '跳转',
        news: '公告',
        text: '公告',
      }
    },
    components: {
      Swiper,
      SwiperItem,
      Cell,
      Marquee,
      MarqueeItem,
      Flexbox,
      FlexboxItem,
      ShopNav
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style scoped>
  .home {
  }
  .nav {
    margin-top: 5px;
  }
  .nva-icon {
    width: 60px;
    margin: 0 auto;
    /*background-color: #58b7ff;*/
  }
</style>
