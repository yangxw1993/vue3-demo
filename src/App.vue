<!--
 * @Author: your name
 * @Date: 2020-10-30 21:54:30
 * @LastEditTime: 2020-12-15 14:35:02
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
        
        <a-menu-item v-for="item in routes" :key="item.path">
          <router-link :to="item.path">{{item.name}}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center"
      >Ant Design ©2018 Created by Ant UED</a-layout-footer
    >
  </a-layout>
</template>
<script>
import { reactive, toRefs, watch, computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// import { fetchResource } from "./utils/request";
import { goodsList } from './service/goods'
import { fetchResource } from './service/resource'
import {router, routes} from './router'
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    // 匹配 路由
    const routerReg = /\/.*?(?=\/)/;
    const status = reactive({
      routes,
      selectedKeys : computed((_) => [route.path.match(routerReg) ?route.path.match(routerReg)[0]:route.path ]),
      allTime: ref(store.getters.allTime),
    });
    onMounted(() => {
      fetchResource().then((res) => {
        console.log("res");
      });
      goodsList().then(res => {
        console.log(res,'goodsList**');
      })
    });

    // watch 监控属性
    // watch(() => route.path, (newValue )=> {
    //   status.selectedKeys = [newValue]
    // }, {immediate: true})
    return {
      ...toRefs(status),
    };
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









