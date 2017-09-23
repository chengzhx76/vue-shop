<template>
  <div class="app-wrapper">
    <div class="main-container">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>

</template>

<script>
  import { FooterNav } from '@/views/layout'
  import Home from '@/views/home'
  import Order from '@/views/order'
  import Me from '@/views/me'

  export default {
    components: {
      FooterNav,
      Home,
      Order,
      Me,
    }
  }
</script>

<style scoped>
  .app-wrapper {
    /*background-color: #cbff1d;*/
  }
</style>
