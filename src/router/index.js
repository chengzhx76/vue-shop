import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vux from '@/components/Vux'
import Alert from '@/components/Alert'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
