/*
 * @Author: your name
 * @Date: 2020-12-08 16:50:51
 * @LastEditTime: 2020-12-08 17:41:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/service/goods.js
 */
import httpRequest from '../utils/request'
import { URL } from '../api/api-url'
function goodsList() {
  return new Promise( (resolve, reject) => {
    httpRequest({url: URL.GOODS_LIST}).then(res => {
      res.code === 0 ? resolve(res.data) :  reject(new Error(res.msg))
    }).catch(err => reject(new Error(err.message)))
  })
}
function init() {
  return new Promise( (resolve, reject) => {
    httpRequest({
      url: URL.INIT,
      data: {
        channel: '1'
      },
      method: 'post'
    }).then(res => {
      res.code === 0 ? resolve(res.data) :  reject(new Error(res.msg))
    }).catch(err => reject(new Error(err.message)))
  })
}
export {
  goodsList,
  init
}
