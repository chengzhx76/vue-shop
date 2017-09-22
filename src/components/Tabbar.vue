<template>
  <div class="tabbar">
    <tabbar>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/icon_nav_msg.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/icon_nav_article.png">
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/icon_nav_cell.png">
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

</style>
