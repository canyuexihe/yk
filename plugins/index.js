// 依赖
import GlobalComponentPlugin from './globalComponent.js'
import UtilPlugin from './util.js'
import ServicePlugin from './service.js'
import MessagePlugin from './message.js'

export default {
	install (Vue) {
		GlobalComponentPlugin(Vue)
		UtilPlugin(Vue)
		ServicePlugin(Vue)
		MessagePlugin(Vue)
	}
}