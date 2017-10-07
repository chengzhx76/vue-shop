<template>
  <div class="main-category">
    <ul class="nav">
      <li @click="click('lll')">daew</li>
      <li class="action"><em class="mark"></em>ddd</li>
      <li>ddd</li>
      <li>ddd</li>
    </ul>
    <div class="content">
      <router-view></router-view>

      <!--<div class="filter">
        ee
      </div>
      <div class="good-list">
        ee
      </div>-->
    </div>
  </div>
</template>

<script>
  import { Swiper } from 'vux'


  export default {
    data () {
      return {
        demo01_list: 1
      }
    },
    components: {
      Swiper
    },
    methods: {
      click (url) {
        console.log(url)
      }
    }
  }
</script>

<style scoped>
  .main-category {
    height: 100%;
    width: 100%;
    background-color: #EDD498;
  }
  .nav {
    height: 100%;
    width: 25%;
    float: left;
    background-color: firebrick;
  }
  .nav li {
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-indent: 15px;
    border-bottom: solid 1px #cccccc;
    background-color: #f4f4f4;

  }
  .nav li.action {
    background-color: #FAFAFA;
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
  }
  .nav li.action .mark {
    height: 30px;
    width: 5px;
    display: inline-block;
    float: left;
    margin-top: 5px;
    background-color: #f0f32e;
  }
  .content {
    width: 75%;
    float: right;
    background-color: peachpuff;
  }
  /*.content .filter {
    background-color: darkgrey;
  }
  .content .good-list {
    background-color: darkorange;
  }*/
</style>
