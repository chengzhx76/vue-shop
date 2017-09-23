<template>
  <div class="tabbar">
    <tabbar>
      <tabbar-item link="/home">
        <img slot="icon" src="../../assets/icon_nav_msg.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/order">
        <img slot="icon" src="../../assets/icon_nav_article.png">
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/me">
        <img slot="icon" src="../../assets/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  .tabbar {
  }
</style>
