<!--
 * @Author: your name
 * @Date: 2020-12-29 19:03:11
 * @LastEditTime: 2020-12-29 19:23:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/views/Example/Drag/Drag.vue
-->
<template>
  <h3>拖拽</h3>
  <img
    draggable="true"
    src="https://cdn.bestseller.com.cn/assets/memberImage/VEROMODA/nullnull-1609224388150.jpg" />
  <div class="content"></div>
</template>
<script>
export default {
  setup(){

  }
}
</script>
<style scoped>
  .content{
    width: 100%;
    height: 200px;
    border: solid 1px #000;
  }
</style>
