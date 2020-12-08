/*
 * @Author: your name
 * @Date: 2020-12-08 17:39:31
 * @LastEditTime: 2020-12-08 17:39:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/service/resource.js
 */
import axios from 'axios';
export function fetchResource(){
    return axios.get('/api/resources')
}
