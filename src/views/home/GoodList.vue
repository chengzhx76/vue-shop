<template>
  <div class="detail">
    <figure class="item" @click="detail(link)">
      <img :src="img">
      <figcaption>
        <div class="info">
          <p class="name">{{ name }}</p>
          <p class="standard">{{ standard }}</p>
        </div>
        <div class="tag"> {{ tag }}</div>
        <div class="price">
          <span class="unit">&yen;</span><span class="text">{{ price }}</span>
        </div>
      </figcaption>
    </figure>
    <div class="icon" @click="add(id)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      id: String,
      img: String,
      name: String,
      standard: String,
      tag: String,
      price: String,
      link: [String, Object]
    },
    data() {
      return {

      }
    },
    methods: {
      add(id) {
        console.log("--add--")
//        this.$router.push(url)
      },
      detail(url) {
        console.log("--detail--")
        if (/^javas/.test(this.url) || !this.url) return
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .detail {
    width: 90px;
    height: 182px;
    /*background: darkkhaki;*/
    margin: 0 auto;
  }
  .item {
    width: 90px;
    height: 190px;
  }
  .item img {
    width: 90px;
    height: 105px;
  }
  .item figcaption .info {
  }
  .item figcaption .info .name {
    font-size: 14px;
    height: 20px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .item figcaption .info .standard {
    font-size: 13px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .item figcaption .tag {
    font-size: 10px;
    width: 45px;
    margin: 3px 0;
    text-align: center;
    background-color: burlywood;
    border-radius: 4px;
  }
  .item figcaption .price .unit {
    font-size: 14px;
    padding-right: 1px;
  }
  .item figcaption .price .text {
    font-size: 16px;
  }
  .icon {
    position: relative;
    bottom: 27px;
    left: 62px;
    width: 25px;
    height: 25px;
  }
</style>
