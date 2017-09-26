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
      <div class="matrix-nav">
        <flexbox :gutter="0">
          <flexbox-item v-for="(item, index) in navList" :key="index">
            <shop-nav class="nva-icon" :title="item.title" :src="item.img" :link="item.url"></shop-nav>
          </flexbox-item>
        </flexbox>
      </div>

      <div class="recommend">
        <divider style="width: 140px; margin: 0 auto; font-size: 12px; color: #EDD498">{{ recommend }}</divider>
        <scroller lock-y :scrollbar-x=false>
          <div class="box1">
            <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
          </div>
        </scroller>
      </div>
    </div>

  </div>
</template>

<script>
  import { Swiper, SwiperItem, Cell, Marquee, MarqueeItem, Flexbox, FlexboxItem, Divider, Scroller } from 'vux'
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
        recommend: '品牌特卖',
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
      ShopNav,
      Divider,
      Scroller
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
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 12px;
  }
  .matrix-nav {
    margin-top: 5px;
  }
  .nva-icon {
    width: 60px;
    margin: 0 auto;
    /*background-color: #58b7ff;*/
  }
  .recommend {
    padding: 15px 12px 0 12px;
    /*background-color: #08e9ef;*/
  }
  .box1 {
    height: 90px;
    position: relative;
    width: 950px;
    /*background-color: antiquewhite;*/
  }
  .box1-item {
    width: 130px;
    height: 90px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 6px;
    float: left;
    text-align: center;
    line-height: 90px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
</style>
