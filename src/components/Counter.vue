<template>
  <h1>{{counter}}</h1>
  <button class="btn" @click="changeValue(1)">+</button>
  <button class="btn" @click="changeValue(-1)">-</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: "Counter",
    setup(){
      const counter = ref(100)
      const changeValue = (num) => {
        counter.value += num
      }
      return {counter, changeValue}
    }
  }
</script>

<style scoped>
  .btn{
    margin: 20px;
    width: 100px;
    font-size: 30px;
  }
</style>