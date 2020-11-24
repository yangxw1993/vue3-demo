/*
 * @Author: your name
 * @Date: 2020-11-24 19:42:45
 * @LastEditTime: 2020-11-24 23:17:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/src/utils/request.js
 */
import axios from 'axios';
export function fetchResource(){
    return axios.get('/api/resources')
}
