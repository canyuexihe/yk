import api from '@/core/service/api.js';

export default (Vue) => {
	Vue.prototype.$service = api;
}