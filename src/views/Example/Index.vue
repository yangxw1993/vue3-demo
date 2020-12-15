<!--
 * @Author: your name
 * @Date: 2020-12-08 18:46:07
 * @LastEditTime: 2020-12-14 18:05:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/views/Example/Index.vue
-->
<template>
  <a-row>
    <a-col :span="6">
      <a-list item-layout="horizontal" :data-source="sideBar">
        <template #renderItem="{ item }">
          <a-list-item>
            <router-link :to="item.path">{{ item.name }}</router-link>
          </a-list-item>
        </template>
      </a-list>
    </a-col>
    <a-col :span="18">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import {routes} from '../../router'
export default {
  setup() {
    const route = useRoute();
    console.log(JSON.stringify(route), '**', route.matched[0].children)
    
    const status = reactive({
      sideBar: route.matched[0].children,
      list: [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ],
    });
    return {
      ...toRefs(status),
    };
  },
};
</script>

<style>
</style>