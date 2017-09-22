<template>
  <div>
    <group>
      <x-switch :title="showMe" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show" :title="congratulations" @on-show="onShow" @on-hide="onHide"> {{suMsg}}</alert>
    </div>
  </div>
</template>

<script>
  import { Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Alert,
      Group,
      XSwitch,
      Cell
    },
    data () {
      return {
        show: false,
        showMe: '显示',
        congratulations: '恭喜',
        suMsg: '消息已成功发送'
      }
    },
    methods: {
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showPlugin () {
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: '同意不?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      showPluginAuto () {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
      }
    }
  }
</script>
