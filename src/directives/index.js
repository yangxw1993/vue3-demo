import copy from './copy/index'

// 自定义指令
const directives = {
  copy,
}
/**
 * 2.0和3.0的
 * bind => beforeMount
  inserted => mounted
  beforeUpdate: 新的钩子，会在元素自身更新前触发
  update => 移除！
  componentUpdated => updated
  beforeUnmount: 新的钩子，当元素自身被卸载前触发
  unbind => unmounted
 */
export default {
  install(Vue) {
    for(let key in directives){
      Vue.directive(key, directives[key])
    }
  },
}