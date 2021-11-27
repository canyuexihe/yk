<script>
	import { util } from '@/plugins/util.js'
	export default {
		globalData: {
			userInfo: null
		},
		onLaunch () {
			console.log('App Launch')
			// const { asyncFlow, uniPromise } = util;
			// const permissionSetting = await uniPromise(uni.getSetting)({})
			// console.log('permissionSetting-', permissionSetting)
			// const result = await asyncFlow(
			// 	// 获取服务供应商
			// 	() => {
			// 		return uniPromise(uni.getProvider)({
			// 			service: 'oauth'
			// 		})
			// 	},
			// 	// 登录获取code
			// 	({provider}) => {
			// 		if (provider.includes('weixin')) {
			// 			return uniPromise(uni.login)({
			// 				provider: 'weixin',
			// 				withCredentials: true
			// 			})
			// 		}
			// 	},
			// 	// 获取用户信息
			// 	async ({ code }) => {
			// 		console.log('loginRes--', code);
			// 		const { userInfo } = await uniPromise(uni.getUserInfo)({
			// 			provider: 'weixin'
			// 		});
			// 		return {
			// 			code,
			// 			userInfo
			// 		}
			// 	},
			// )()
			// console.log('result---', result)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */	
	@import '@/common/index.css';
</style>
