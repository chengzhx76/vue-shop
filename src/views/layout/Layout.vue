<template>
  <div class="app-wrapper">
    <div class="main-container">
      <app-main></app-main>
    </div>
    <footerbar></footerbar>
  </div>

</template>

<script>
  import { Footerbar, AppMain } from '@/views/layout'

  export default {
    components: {
      AppMain,
      Footerbar
    }
  }
</script>

<style scoped>
  .app-wrapper {
  }
</style>
