<template>
  <div class="home">
    <Counter />
    <div class="div-box" @mousedown="mousedown" ref="root">
      
    </div>
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
      console.log(root.value) // <div>这是根元素</div>
    })
    const mousedown = (e) => {
      console.log(e);
    };

    return {
      root,
      mousedown
    }
  }
}
</script>
<style lang="less" scoped>
  .div-box{
    width: 100%;
    height: 300px;
    border: solid 1px red;
  }
</style>