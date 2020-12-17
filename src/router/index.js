/*
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-12-16 23:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/about',
    name: '关于我们',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/plan',
    name: '计划时间',
    component: () => import('../views/Plan/')
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import('../views/Cart/')
  },
  {
    path: '/example',
    name: '个人案例',
    component: () => import('../views/Example/Index.vue'),
    // redirect: '/example/upload',
    children: [
      {
        path: '/example/upload',
        name: '上传图片',
        component: () => import('../views/Example/Upload/Index.vue'),
      },
      {
        path: '/example/canvas',
        name: '八卦',
        component: () => import('../views/Example/Canvas/Index.vue'),
      },
      {
        path: '/example/line',
        name: '线条',
        component: () => import('../views/Example/Canvas/Line.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export {
  router,
  routes
}
