/*
 * @Author: your name
 * @Date: 2020-11-24 19:42:45
 * @LastEditTime: 2020-12-08 17:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/utils/request.js
 * props->sub_orders："$.props.sub_orders: is missing but it is required"
props->order->order_time："$.props.order.order_time: is missing but it is required"
props->order->pay_time："$.props.order.pay_time: is missing but it is required"
 */

import axios from 'axios';
export default function httpRequest (options){
  const defaultConfig = {
    // baseURL: 'http://localhost:8888/',
    headers: {
      'Content-Type': 'application/json', // 请求体类型默认值
      token: 'eyJqdGkiOiJYQENZdTdRUFQ0IiwiaWF0IjoxNjA3NDEzNjYzLCJjaGFubmVsIjoiNSJ9.zd9axQe3g7pBBKormLiBi6KQE9vOm5zP1Lb61WJtIhI'
      // 'Content-Type': 'application/x-www-form-urlencoded', // 请求体类型默认值
    },
    method: 'get'
  };
  const {method = '', headers = {}} = options;
  if(method){
    defaultConfig.method = method.toLocaleLowerCase();
  }
  options.headers ? Object.assign(defaultConfig.headers, options.headers) : '';
  Object.assign(defaultConfig, options);
  return new Promise((resolve, reject) => {
    axios(defaultConfig).then(res => {
      res.status === 200 ? resolve(res.data) : reject(new Error(res.data.msg))
    }).catch(err => {
      reject(new Error(err.message))
    })
  })
}