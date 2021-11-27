export default (Vue) => {
	Vue.prototype.$loading = (message) => {
		uni.showLoading({
			title: message || '加载中'
		})
	}
	Vue.prototype.$hideloading = uni.hideLoading;
}