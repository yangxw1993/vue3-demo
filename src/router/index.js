/*
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-11-26 18:28:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/Plan/')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart/')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
