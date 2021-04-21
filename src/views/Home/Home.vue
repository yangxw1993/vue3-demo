<template>
  <div class="home">
    <Counter />
    <div class="div-box" data-code="code" ref="root"></div>
  </div>
</template>

<script>
import {ref, nextTick, onMounted} from 'vue';
import Counter from '@/components/Counter/Counter'
export default {
  name: 'Home',
  components: {
    Counter
  },
  setup(){
    const root = ref(null)

    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      // console.log(root.value) // <div>这是根元素</div>
       const oRoot = root.value;
      oRoot.addEventListener('mousedown', mousedown);
      oRoot.addEventListener('mouseup', mouseup,);
    })
    
    
    // 鼠标按下
    const mousedown = (e) => {
      console.log(e, '***down');
      root.value.addEventListener('mousemove', mousemove, true)
    };
    // 鼠标移动
    const mousemove = (e) => {
      console.log(e, '******move');
    };
    // 鼠标抬起
    const mouseup = (e) => {
      root.value.removeEventListener('mousemove', mousemove, true)
      console.log(e, '**up');
    };
    return {
      root,
    }
  }
}
</script>
<style lang="less" scoped>
.div-box {
  width: 100%;
  height: 300px;
  border: solid 1px red;
}
</style>