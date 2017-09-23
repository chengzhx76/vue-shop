<template>
  <div class="app-main">
    <swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange"></swiper>
  </div>
</template>

<script>
  import { Swiper } from 'vux'

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
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  export default {
    data () {
      return {
        demo01_list: baseList,
        demo02_index: 1,
      }
    },
    components: {
      Swiper
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      }
    }
  }
</script>

<style scoped>

</style>
