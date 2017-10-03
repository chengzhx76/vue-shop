<template>
  <li class="item" @click="link(url)">
    <div class="img"><img :src="img"></div>
    <p class="text">{{ title }}</p>
  </li>
</template>

<script>
  export default {
    props: {
      img: String,
      title: String,
      url: [String, Object]
    },
    methods: {
      link(url) {
        if (/^javas/.test(this.url) || !this.url) return
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 25%;
    height: 53px;
    /*margin-left: 1px;*/
    margin-top: 3px;
    float: left;
    list-style: none;
    /*background: darkgray;*/
  }
  .item .img {
    height: 30px;
    width: 30px;
    margin: 0 auto;
  }
  .item .img img {
    height: 30px;
  }
  .item .text {
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    /*background: darkkhaki;*/
  }
</style>
