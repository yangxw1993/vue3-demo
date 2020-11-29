/*
 * @Author: your name
 * @Date: 2020-10-11 22:07:43
 * @LastEditTime: 2020-11-29 21:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/store/index.js
 */
import { createStore } from 'vuex'
import cart from './modules/cart'
import plan from './modules/plan'

export default createStore({
  modules: {
    cart,
    plan,
  },
})
