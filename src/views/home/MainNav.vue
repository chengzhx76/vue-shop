<template>
  <div class="goods">
    <div class="title">
      <h1 class="name">
        <span class="text">{{ title }}</span>
        <em class="more" @click="more(link)">更多 ></em>
      </h1>
      <div class="line"></div>
    </div>
    <div class="show" @click="more(link)">
      <img :src="src">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default{
    props: {
      src: String,
      title: String,
      link: [String, Object]
    },
    methods: {
      more(url) {
        console.log("--more--")
        if (/^javas/.test(this.url) || !this.url) return
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .goods {
    /*height: 280px;*/
    width: 100%;
    margin-top: 10px;
    padding-bottom: 5px;
    /*background-color: cadetblue;*/
  }
  .goods .title .name {
    width: 100%;
    height: 42px;
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
    height: 42px;
    font-size: 14px;
    font-style: normal;
    width: 15%;
    float: right;
    display: block;
    line-height: 60px;
    color: #cccccc;
    /*background-color: darkcyan;*/
  }
  .goods .title .line {
    height: 5px;
    width: 25px;
    background-color: #EDD498;
    margin: 0 auto;
  }
  .goods .show {
    width: 88%;
    margin: 10px auto;
  }
  .goods .show img {
    width: 100%;
    border-radius: 50px;
    /*border-radius: 50px;*/
  }
</style>
