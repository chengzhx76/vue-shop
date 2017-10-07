<template>
  <div class="main-content">
   主要内容1
  </div>
</template>

<script>
  export default {
    data () {
      return {
        demo01_list: 1
      }
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_list = index
      }
    }
  }
</script>

<style scoped>

</style>
