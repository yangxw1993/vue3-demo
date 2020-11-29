/*
 * @Author: your name
 * @Date: 2020-10-11 22:07:43
 * @LastEditTime: 2020-11-29 17:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/store/index.js
 */
import { createStore } from 'vuex'
import books from '@/data/book.js'

export default createStore({
  state: {
    books,
  },
  getters: {
    allTime() {
      return 1
    },
    
    // 购物车总价
    cartTotalPrice(state){
      return state.books.reduce((total, item) => {
        return total + item.price * item.count
      }, 0)
    },
    // 单个商品总价
    cartItemPrice(state){
      return (id) => {
        let item = state.books.find(item => item.id === id);
        if(item){
          return item.price * item.count;
        }
      }
    }
  },
  mutations: {
    addBookToCart(state, item){
      state.books.push(item)
    },
    removeBook(state, id){
      let index = state.books.findIndex(item => item.id === id);
      if(index >= 0){
        state.books.splice(index, 1)
      }
    },
    // 改变购物车数量
    changeCartCount(state, {id, count}){
      console.log({id, count})
      let item = state.books.find(item => item.id === id);
      if(item){
        item.count += count;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
