<template>
	<view class="page page-auth">
		<view class="page-auth__top">
			<image class="page-auth__top-left" mode="widthFix" src="/static/111.png"></image>
			<image class="page-auth__top-right" mode="widthFix" src="/static/222.png"></image>
		</view>
		<view class="page-auth__icon">
			<image mode="widthFix" src="/static/123.png"></image>
		</view>
		<view class="auth-operate">
			<view class="auth-operate__button">
				<text>微信授权登录</text>
				<button v-if="canIUseGetUserProfile" class="auth-operate__placeholder" @click="getUserProfile"> 微信授权登录1 </button>
				<button v-else class="auth-operate__placeholder" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信授权登录2</button>
			</view>
			<view class="auth-operate__des">
				查看
				<g-combine-popup ref="combinePopup">
					<view slot="trigger">
						<text class="auth-operate__des-text">免责声明</text>
					</view>
					<view class="auth-operate-popup">
						<view class="auth-operate-popup__wrap">
							<view class="auth-operate-popup-title">免责声明</view>
							<view class="auth-operate-popup-des">
								<view>1、项目展示所附项目资料（包括任何图片、文字或其他资料等）仅供交流，并不用于商业用途，不作为要约或承诺，项目进程及效果呈现以开发商实际建设为准。</view>
								<view>2、项目展示与交流互动会在您授权同意的基础上为您提供评论、关注等功能，展示页面不负责保存相关信息内容，但不会影响展示与交流互动。</view>
								<view>3、展示图文等信息的知识产权归其权利人享有，该展示信息项目方或承接方拥有最终解释权，如原作者或编辑对该部分使用展示交流有任何征询，可联系展示项目方或承接方，该小程序展示页面所以不受理电话/QQ/微信反馈。</view>
								<view>4、项目展示资料来源于项目方或承接方，不代表各方立场，因编辑需要，文字和图片之间无必然联系，仅供参考。任何因直接或间接使用该展示资料或者据此进行的一切操作，各项目方不对此承担责任。</view>
								<view>5、项目方或承接方拥有展示信息的管理、修改、删除的权利，项目展示内容如后续有更新，本相关展示内容自动失效。</view>
							</view>
						</view>
					</view>
				</g-combine-popup>
				和
				<g-combine-popup ref="combinePopup">
					<view slot="trigger">
						<text class="auth-operate__des-text">隐私</text>
					</view>
					<view class="auth-operate-popup">
						<view class="auth-operate-popup__wrap">
							<view class="auth-operate-popup-title">隐私</view>
							<view class="auth-operate-popup-des">
								<view>homeland城市（以下简称HL）网站非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的
								服务，本隐私政策解释了这些情况下的数据收集和使用情况。
								本政策适用于HL网站的所有相关服务，随着HL网站服务范围的扩大，隐私政策的内
								容可由HL网站随时更新，且毋须另行通知。更新后的隐私政策一旦在网页上公布即有效
								代替原来的隐私政策。</view>
								<view>我们收集哪些信息。</view>
								<view>通常，您能在匿名的状态下访问HL网站并获取信息。当我们需要能识别您的个人信息或者可以与您联系的信息时，我们会征求您的同意。</view>
								<view>通常，在您注册HL网站或申请开通新的功能时，我们可能收集这些信息：</view>
								<view>姓名、E-mail地址、住址和电话号码，并征求您的确认。</view>
								<view>关于您的个人信息</view>
								<view>HL网站严格保护您个人信息的安全。</view>
								<view>我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏</view>
								<view>HL网站会在法律要求或符合HL网站的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：</view>
								<view>(a)满足法律或行政法规的明文规定，或者符合HL网站站适用的法律程序；</view>
								<view>(b)符合HL网站相关服务条款、软件许可使用协议的约定；</view>
								<view>(c)保护HL网站的权利或财产；</view>
								<view>(d)在紧急情况下保护HL网站员工、HL网站产品或服务的用户或大众的个人安全；</view>
								<view>HL网站不会未经您的允许将这些信息与第三方共享，本政策已经列出的上述情况除外。</view>
							</view>
						</view>
					</view>
				</g-combine-popup>
			</view>
		</view>
		<view class="page-auth__footer">
			<image mode="widthFix" src="/static/333.png"></image>
		</view>
	</view>
</template>

<script>
	import api from '@/core/service/api.js'
	export default {
		data () {
			return {
				hasAuth: 2, // 0: 正在请求中，1: 已授权，2：未授权
				canIUseGetUserProfile: false,
				targetUrl: null
			}
		},
		methods: {
			async getuserinfo (e) {
				
				const { data } = await this.fetchUserInfo(e.detail.userInfo);
				this.setGlobalData('userInfo', e.detail.userInfo);
				this.setUserStorage(e.detail.userInfo);
				this.routerEntry();
			},
			async getUserProfile () {
				const { uniPromise } = this.$util;
				Promise.all([
					// 获取code
					uniPromise(uni.login)({provider: 'weixin'}),
					uniPromise(uni.getUserProfile)({desc: '您的信息仅作为个人展示噢'})
				]).then(async ([codeRes, userInfoRes]) => {
					const { code } = codeRes;
					const { userInfo } = userInfoRes;
					
					this.setUserStorage(userInfo)
					
					const { data } = await api.loginIn(code, userInfo.nickName, userInfo.avatarUrl, userInfo.gender);
					this.setGlobalData('userInfo', data);
					this.routerEntry();
				})
			},
			// 获取用户信息
			async fetchUserInfo (userInfo) {
				const { uniPromise, asyncFlow } = this.$util;
				
				return await asyncFlow(
					// 获取code
					async () => uniPromise(uni.login)({provider: 'weixin'}),
					// 获取登录
					async ({code}) => api.loginIn(code, userInfo.nickName, userInfo.avatarUrl, userInfo.gender)
				)()
			},
			// 设置全局数据
			setGlobalData (key, value) {
				const { globalData } = getApp();
				globalData[key] = value;
			},
			// 设置缓存
			setUserStorage (value) {
				const userInfo = uni.getStorageSync('userInfo');
				if (!userInfo) {
					uni.setStorageSync('userInfo', value); // 设置缓存
				}
			},
			// 进入初始页
			routerEntry () {
				if (this.targetUrl) {
					uni.redirectTo({
						url: this.targetUrl
					})
				} else {
					uni.navigateBack({})
				}
			}
		},
		onInit () {
			uni.preloadPage({url: this.targetUrl});
		},
		async onLoad(option) {
			this.targetUrl = option.targetUrl;
			if (uni.getUserProfile) {
				this.canIUseGetUserProfile = true;
				const userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					const { data } = await this.fetchUserInfo(userInfo);
					this.setGlobalData('userInfo', data);
					uni.showToast({
						title: '自动登录成功',
						icon: 'success',
						duration: 1500,
						success: () => {
							setTimeout(() => {
								this.routerEntry();
							}, 1500)
						}
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.page-auth {
		background-color: #fff;
		image {
			display: block;
			margin: 0 auto;
		}
		.page-auth__top-left {
			position: absolute;
			top: 0;
			left: 0;
			width: 94px;
		}
		.page-auth__top-right {
			position: absolute;
			top: 0;
			right: 0;
			width: 100px;
		}
		.page-auth__top {
			width: 100%;
		}
		.page-auth__icon {
			margin-top: 150px;
			> image {
				width: 140px;
			}
		}
		.auth-operate {
			margin: 35px 0;
		}
		.auth-operate__button {
			position: relative;
			display: block;
			margin: 0 auto;
			width: 240px;
			height: 40px;
			line-height: 38px;
			border: 1px solid rgba(244, 97, 80, 1);
			background-color: rgba(244, 97, 80, 1);
			color: #fff;
			font-size: 20px;
			text-align: center;
			font-size: 14px;
			border-radius: 4px;
		}
		.auth-operate__des {
			margin-top: 10px;
			font-size: 12px;
			text-align: center;
			display: flex;
			justify-content: center;
			.auth-operate__des-text {
				color: rgba(244, 97, 80, 1);
			}
		}
		.auth-operate__placeholder {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			z-index: 2;
		}
		.page-auth__footer {
			width: 100%;
			margin-top: 50px;
			> image {
				width: 160px;
			}
		}
		.auth-operate-popup {
			max-height: 400px;
			overflow: hidden;
			overflow-y: auto;
			.auth-operate-popup__wrap {
				background-color: #fff;
				box-sizing: border-box;
				padding: 16px;
			}
			.auth-operate-popup-title {
				font-size: 20px;
				font-weight: 600;
				text-align: center;
				margin-bottom: 16px;
			}
			.auth-operate-popup-des {
				font-size: 14px;
				line-height: 1.35;
				text-align: left;
				> view {
					margin-bottom: 16px;
				}
			}
		}
	}
</style>
