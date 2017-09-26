<template>
  <div>
    <figure class="shop-nav" @click="onClick">
      <img :src="src">
      <figcaption>{{title}}</figcaption>
    </figure>
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
      onClick () {
        if (/^javas/.test(this.link) || !this.link) return
        this.$router.push(this.link)
      }
    }
  }
</script>

<style scoped>
  .shop-nav {
    height: 75px;
    width: 60px;
    /*background-color: darkgoldenrod;*/
  }
  .shop-nav img {
    height: 50px;
    width: 50px;
    margin: 0 auto;
    display: table-cell;
    /*background-color: darkblue;*/
  }
  .shop-nav figcaption {
    height: 25px;
    width: 60px;
    line-height: 30px;
    text-align: center;
    /*background-color: rebeccapurple;*/
  }
</style>
