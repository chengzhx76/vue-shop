<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :list="swipers" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
    </div>
    <!-- 消息 -->
    <div class="msg">
      <cell :title="news" primary="conten" style="height: 20px;">
        <marquee style="margin-left: 10px;">
          <marquee-item v-for="(item, index) in demo04_list" :key="index">{{ item }}</marquee-item>
        </marquee>
      </cell>
    </div>
    <!-- 导航 -->
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

    <!-- 首页商品列表 -->
    <div class="shop-goods">
      <main-nav v-for="(item, index) in mainNav" :key="index" :title="item.title" :src="item.img" :link="item.url">
        <flexbox :gutter="3" style="margin-bottom: 10px">
          <flexbox-item v-for="(commodity, index) in item.commodities" :key="index">
            <good-list :name="commodity.name"
                       :img="commodity.img"
                       :link="commodity.url"
                       :tag="commodity.tag"
                       :price="commodity.price"
                       :standard="commodity.standard">
              <x-icon style="fill: red;" type="ios-plus-outline" size="24"></x-icon>
            </good-list>
          </flexbox-item>
        </flexbox>
      </main-nav>
    </div>

  </div>
</template>

<script>
  import { Swiper, SwiperItem, Cell, Marquee, MarqueeItem, Flexbox, FlexboxItem, Divider, Scroller } from 'vux'
  import ShopNav from '@/components/ShopNav'
  import MainNav from '@/views/home/MainNav'
  import GoodList from '@/views/home/GoodList'

  const mainNav = [{
    url: 'javascript:',
    img: '../../../static/show/baixiangguo1.jpg',
    title: '优选水果',
    commodities: [
      {
        id: "1",
        url: 'javascript:',
        img: '../../../static/goods/icon1.png',
        name: '精选白心蜜柚',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.9',
      },
      {
        url: 'javascript:',
        img: '../../../static/goods/icon2.png',
        name: '精选红心蜜柚',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.1',
      },
      {
        url: 'javascript:',
        img: '../../../static/goods/icon3.png',
        name: '精选红心蜜柚',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.1',
      }
    ]
  }, {
    url: 'javascript:',
    img: '../../../static/show/baixiangguo1.jpg',
    title: '送你一辆车',
    commodities: [
      {
        url: 'javascript:',
        img: '../../../static/goods/icon4.png',
        name: '精选白心蜜柚',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.9',
      },
      {
        url: 'javascript:',
        img: '../../../static/goods/icon5.png',
        name: '精选白心蜜柚2',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.1',
      },
    ]
  }, {
    url: 'javascript:',
    img: '../../../static/show/mangguo.jpg',
    title: '送你一次旅行',
    commodities: [
      {
        url: 'javascript:',
        img: '../../../static/goods/icon2.png',
        name: '精选白心蜜柚',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.9',
      },
      {
        url: 'javascript:',
        img: '../../../static/goods/icon5.png',
        name: '精选白心蜜柚2',
        standard: '1.25-1.6kg/粒',
        tag: '送果蔬盐',
        price: '10.1',
      },
    ]
  }]

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
        mainNav: mainNav,
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
      Scroller,
      MainNav,
      GoodList,
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      onItemClick () {
        console.log('on item click')
      },
      recomm(url) {
        console.log("--recomm--")
        if (/^javas/.test(this.url) || !this.url) return
        this.$router.push(url)
      },
    }
  }
</script>

<style scoped>
  .home {
    padding-bottom: 70px;
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
  .shop-goods {
    background-color: #ffffff;
  }
</style>
