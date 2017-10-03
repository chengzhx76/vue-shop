<template>
  <div class="app-wrapper">
    <div class="main-container">
      <router-view></router-view>
    </div>
    <footer-nav>
      <footer-nav-item v-for="(item, index) in navs" :key="index" :title="item.title" :img="item.img" :url="item.url"></footer-nav-item>
    </footer-nav>
  </div>

</template>

<script>
  import { FooterNav, FooterNavItem } from '@/views/layout'
  import Home from '@/views/home'
  import Order from '@/views/order'
  import Me from '@/views/me'

  const navList = [{
    url: '/home',
    img: '../../../static/vegetables.png',
    title: '首页'
  }, {
    url: '/order',
    img: '../../../static/vegetables.png',
    title: '商城'
  }, {
    url: '/order',
    img: '../../../static/vegetables.png',
    title: '购物车'
  }, {
    url: '/me',
    img: '../../../static/vegetables.png',
    title: '我的'
  }]

  export default {
    data () {
      return {
        navs: navList
      }
    },
    components: {
      FooterNav,
      FooterNavItem,
      Home,
      Order,
      Me
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>

<style scoped>
  .app-wrapper {
    /*background-color: #cbff1d;*/
  }
</style>
