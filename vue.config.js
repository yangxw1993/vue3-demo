/*
 * @Author: your name
 * @Date: 2020-11-24 19:38:20
 * @LastEditTime: 2020-12-08 16:40:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-demo/vue.config.js
 */
module.exports = {
	devServer: {
		proxy: {
			'^/api': {
				target: 'https://vue3-fjord-81553.herokuapp.com', 	// 请求的接口的域名
				// secure: false,  				// 如果是https接口，需要配置这个参数
				changeOrigin: true, 			// 如果接口跨域，需要进行这个参数配置
			},
			'^/rest': {
				target: 'https://fol.bestseller.com.cn', 	// 请求的接口的域名
				secure: false,  				// 如果是https接口，需要配置这个参数
				changeOrigin: true, 			// 如果接口跨域，需要进行这个参数配置
			},
			'^/init': {
				target: 'http://pyplatform.vm.cn', 	// 请求的接口的域名
				// secure: false,  				// 如果是https接口，需要配置这个参数
				changeOrigin: true, 			// 如果接口跨域，需要进行这个参数配置
			}

		}

	}
}