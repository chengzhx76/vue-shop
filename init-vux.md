## Build Setup

``` bash
vue init webpack vux-demo

cd vux-demo
npm install


npm install vux --save
npm install vux-loader --save-dev
npm install less-loader --save-dev

在build/webpack.base.conf.js里参照如下代码进行配置

const originalConfig = ··· 替换掉 module.exports = ···

const vuxLoader = require('vux-loader')
const webpackConfig = originalConfig

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})

增加.vue文件
<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  }
}
</script>

main.js中调用plugin
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

router/index.js增加路由
{
  path: '/vux',
  name: 'Vux',
  component: Vux
}

启动
npm run dev

访问
http://localhost:8080/#/vux
```
