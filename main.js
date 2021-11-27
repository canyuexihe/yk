import Vue from 'vue'
import App from './App'
import Plugin from './plugins/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

// 依赖注册
Plugin.install(Vue);

const app = new Vue({
	...App
})
app.$mount()
