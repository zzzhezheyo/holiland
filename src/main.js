// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入所有的请求
import * as $http from './requests'
Vue.prototype.$http = $http

Vue.use(MintUI)

Vue.config.productionTip = false

// 全局导航守卫
router.beforeEach((to, from, next) => {
	console.log(to, from)
	if(to.meta.isAuthCheck){
		//判断用户是否登录
		if(store.state.isLogin){//已登录
			next()
		}else{
			next("/login")
		}
		
	}else{
		next()
	}
	// if (to.name === "mine") {
		// 判断是否登录
		// const r = Math.random()
		// console.log(r)
		// if (r > 0.5) // 未登录
		// 	next("/home")
	// }
	
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  store,//Vuex
  components: { App },
  template: '<App/>'
})
