<template>
  <div class="home">
    <div class="swiper">
      <swiper :list="swipers" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
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
          <div class="sells">
            <div class="item" v-for="(item, index) in recommends" :key="index" @click="recomm(item.url)"><img :src="item.img"/></div>
          </div>
        </scroller>
      </div>
    </div>

    <div class="goods">
      <div class="title">
        <h1 class="name">
          <span class="text">优选水果</span>
          <em class="more">更多 ></em>
        </h1>
        <div class="line"></div>
      </div>
      <div class="mail-img">
        <img src="">
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
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
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
  const recommends = [{
    url: '/order',
    img: '../../../static/recommend/juzi.png',
    title: '桔子'
  }, {
    url: '/order',
    img: '../../../static/recommend/lanmei.png',
    title: '蓝莓'
  }, {
    url: '/order',
    img: '../../../static/recommend/lizi.png',
    title: '梨子'
  }, {
    url: '/order',
    img: '../../../static/recommend/pingguo.jpg',
    title: '苹果'
  }, {
    url: '/order',
    img: '../../../static/recommend/xiangjiao.png',
    title: '香蕉'
  }]
  export default {
    data () {
      return {
        swipers: baseList,
        demo04_list: textList,
        navList: navList,
        recommends: recommends,
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
      },
      recomm(url) {
        if (/^javas/.test(this.link) || !this.link) return
        this.$router.push(url)
      },
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
  .recommend .sells {
    /*height: 90px;*/
    /*position: relative;*/
    width: 680px;
    /*background-color: antiquewhite;*/
  }
  .recommend .sells .item {
    width: 130px;
    height: 90px;
    background-color: #ccc;
    /*display:inline-block;*/
    margin-left: 6px;
    float: left;
  }
  .recommend .sells .item img {
    width: 130px;
    height: 90px;
  }
  .recommend .sells .item:first-child {
    margin-left: 0;
  }
  .goods {
    height: 200px;
    margin-top: 10px;
    background-color: cadetblue;
  }
  .goods .title .name {
    width: 100%;
    height: 50px;
    /*background-color: #EDD498;*/
  }
  .goods .title .name .text {
    font-size: 22px;
    width: 70%;
    /*height: 50px;*/
    float: left;
    display: block;
    line-height: 50px;
    text-align: center;
    padding-left: 15%;
  }
  .goods .title .name .more {
    height: 50px;
    font-size: 14px;
    font-style: normal;
    width: 15%;
    float: right;
    display: block;
    line-height: 80px;
    color: #cccccc;
    /*background-color: darkcyan;*/
  }
  .goods .title .line {
    height: 5px;
    width: 25px;
    background-color: #EDD498;
    margin: 0 auto;
  }
</style>
