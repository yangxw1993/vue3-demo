/*
 * @Author: your name
 * @Date: 2020-11-24 19:42:45
 * @LastEditTime: 2020-11-25 13:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/utils/request.js
 * props->sub_orders："$.props.sub_orders: is missing but it is required"
props->order->order_time："$.props.order.order_time: is missing but it is required"
props->order->pay_time："$.props.order.pay_time: is missing but it is required"
 */
import axios from 'axios';
export function fetchResource(){
    return axios.get('/api/resources')
}
