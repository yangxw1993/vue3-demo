import copy from './copy/index'

// 自定义指令
const directives = {
  copy,
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}