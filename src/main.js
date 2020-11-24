/*
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-11-24 23:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router).use(Antd).mount('#app')
