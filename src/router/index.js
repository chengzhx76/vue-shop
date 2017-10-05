import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'
import Home from '@/views/home'
import Category from '@/views/category'
import Me from '@/views/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          name: 'Home',
          path: 'home',
          component: Home
        },
        {
          name: 'Category',
          path: 'category',
          component: Category
        },
        {
          name: 'Me',
          path: 'me',
          component: Me
        }
      ]
    },
  ]
})
