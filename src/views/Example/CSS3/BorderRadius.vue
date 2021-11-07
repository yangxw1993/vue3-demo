<!--
 * @Author: your name
 * @Date: 2020-12-24 11:47:48
 * @LastEditTime: 2021-01-20 19:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/views/Example/CSS3/BorderRadius.vue
-->
<template>
  <div class="flex-start main"> 
    <div
      v-for="item in divList"
      :key="item"
      :class="[item, defaultClass]"
      @animationstart="animationstart"
    ></div>
    <div class="cont" @transitionend="transitioned($event)"></div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup() {
    const data = reactive({
      divList: ["border-t", "border-all", "circle"],
      // 默认样式
      defaultClass: "box",
    });
    const transitioned = (e) => {
      // 执行两次是因为改变了两个属性 background-color width
      console.log(e.propertyName);
      console.log('animate is end!')
    };
    
    return {
      ...toRefs(data),
      transitioned
    };
  },
};
</script>

<style lang="less" scoped>
@width: 50px;
.main {
  flex-wrap: wrap;
  .box {
    margin-left: 20px;
    width: @width;
    height: @width;
    border: @width solid #f3f3f3;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 1s infinite linear;
  }
  .border-t {
    border-top: @width solid #2842d8;
  }
  .border-all {
    border-top: @width solid #d4242d;
    border-bottom: @width solid #2842d8;
    border-right: @width solid #28d8c9;
    border-left: @width solid #28d837;
  }
  .circle {
    border: @width / 10 solid #f3f3f3;
    border-radius: 50%;
    border-top: @width / 10 solid #2842d8;
    animation: rotate 2s linear infinite;
  }
  .cont{
    width: 100px;
    height: 100px;
    border: solid 1px #000;
    transition: 0.3s;
    &:hover{
      width: 200px;
      background: red;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>