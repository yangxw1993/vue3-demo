/*
 * @Author: your name
 * @Date: 2020-11-29 21:42:03
 * @LastEditTime: 2020-11-30 00:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/store/modules/cart.js
 */
import books from '@/data/book.js'
const cart = {
	state: {
		books,
		modifyItem: {
			id: '',
			goodsName: '',
			price: '',
			count:1,
		}
	},
	getters: {
		// 购物车总价
		cartTotalPrice(state) {
			return state.books.reduce((total, item) => {
				return total + Number(item.price) * item.count
			}, 0)
		},
		// 单个商品总价
		cartItemPrice(state) {
			return (id) => {
				let item = state.books.find(item => item.id === id);
				if (item) {
					return item.price * item.count;
				}
			}
		}
	},
	mutations: {
			// 初始化modify
		initModify(state){
			state.modifyItem = {
				id: '',
				goodsName: '',
				price: '',
				count:1,
			}
		},
		addBookToCart(state, book) {
			let index = state.books.findIndex(item => item.id === book.id);
			if(index >= 0){
				state.books.splice(index, 1, book)
			}else{
				state.books.push(book)
			}

		},
		removeBook(state, id) {
			let index = state.books.findIndex(item => item.id === id);
			if (index >= 0) {
				state.books.splice(index, 1)
			}
		},
		// 改变购物车数量
		changeCartCount(state, { id, count }) {
			let item = state.books.find(item => item.id === id);
			if (item) {
				item.count += count;
			}
		},
	},
	actions: {
		modifyCart(context, bookItem){
			context.state.modifyItem = Object.assign({},bookItem) ;
		},
		addCart(context, bookItem){
			context.commit('addBookToCart', bookItem)
		}
	}
}
export default cart