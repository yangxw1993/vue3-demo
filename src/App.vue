<!--
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-11-01 11:26:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/App.vue
-->
<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/plan">
          <router-link to="/plan">时间计划</router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <router-link to="/about">关于我们</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
       <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import {reactive, toRefs, watch, computed} from 'vue'
import {useRoute} from 'vue-router'
export default {
  setup(){
    // const status = reactive({
    //   selectedKeys: ['/'],
    // })
    const route = useRoute();
    console.log('route', route);
  
    
    // watch 监控属性
    /* watch(() => route.path, (newValue )=> {
      status.selectedKeys = [newValue]
    }, {immediate: true}) */
    const selectedKeys = computed(() => {
      return [route.path]
    })
    return {
      ...toRefs(status),
      selectedKeys
    }
  },
  
};
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
