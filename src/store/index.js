/*
 * @Author: your name
 * @Date: 2020-10-11 22:07:43
 * @LastEditTime: 2020-11-29 16:03:15
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
    }
  },
  actions: {
  },
  modules: {
  }
})
