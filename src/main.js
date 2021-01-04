/*
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-12-24 15:43:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
// 自定义指令
import directives from './directives/index'
import './app.less'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(directives).use(store).use(router).use(Antd).mount('#app')
