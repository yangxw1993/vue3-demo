<!--
 * @Author: your name
 * @Date: 2020-11-26 18:30:43
 * @LastEditTime: 2020-11-29 16:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/views/Cart/index.vue
-->
<template>
  <h1>购物车🛒</h1>
  <AddCart />
  <CartList />
  
</template>

<script>
import CartList from '@/components/Cart/CartList'
import AddCart from '@/components/Cart/AddCart'
export default {
  components: {CartList, AddCart}
}
</script>

<style>

</style>