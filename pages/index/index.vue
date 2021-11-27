<template>
	<view class="page page-home">
		<view class="page-wrap">
			<view class="page-container">
				<!-- 头部banner -->
				<swiper class="page-home__banner" :indicator-dots="swiperOption.indicatorColor"
					:indicator-active-color="swiperOption.indicatorActiveColor" :autoplay="swiperOption.autoplay"
					:interval="swiperOption.interval" :duration="1000" :current="swiperOption.current">
					<swiper-item v-for="(item, index) in bannerList" :key="index">
						<view class="page-home__banner-item">
							<image mode="widthFix" :src="item"></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 公司 -->
				<view class="page-home__company">
					<view class="flex-row">
						<view class="page-home__company-left">
							<view class="page-home__company-adr-name">
								{{companyInfo.name}}
							</view>
							<view class="page-home__company-adr-content">
								地址：{{companyInfo.adr}}
							</view>
							<image class="page-home__project-icon" src="/static/project-idetify.png"></image>
						</view>
						<view class="page-home__company-right">
							<image class="page-home__company-icon" src="/static/company-idetify.png"></image>
							<view class="page-home__company-adr-title">
								项目方：
							</view>
							<view class="page-home__company-name" @click="routerCompanyDetail">
								{{companyInfo.project}}
							</view>
						</view>
					</view>
				</view>
				<!-- 评论 -->
				<view class="page-home__comments">
					<g-comment  :comments="comments.message" :focusNum="comments.focusNum" :focusAvatar="comments.focusAvatar"></g-comment>
					<view class="page-home__comments-input">
						<input type="text" placeholder="说点什么吧" v-model="message" @confirm="submitMessage" />
					</view>
				</view>
				<!-- 项目介绍 -->
				<view class="page-home__project">
					<view class="flex-row">
						<view class="page-home__project-left">
							<view class="page-home__project-head">
								<g-sign-block class="page-home__project-brand" type="primary" size="large">项目介绍</g-sign-block>
								<text class="page-home__project-title">{{projectInfo.name}}</text>
							</view>
							<view class="page-home__project-show">
								<image :src="projectInfo.banner" mode="scaleToFill" class="page-home__project-image">
								</image>
							</view>
						</view>
						<view class="page-home__project-right">
							<view class="flex-row flex-wrap">
								<view class="page-home__project-icon">
									项目 进度
								</view>
								<view class="page-home__project-route" @click="routeProjectIntro">
									查看详情
								</view>
							</view>
							<view class="page-home__project-tag">
								<view class="w-100 flex-row space-around">
									<view class="page-home__project-tag-item">
										市场 调研
									</view>
									<view class="page-home__project-tag-item grey">
										正式 开业
									</view>
								</view>
								<view class="w-100 flex-row space-around">
									<view class="page-home__project-tag-item">
										商业 定位
									</view>
									<view class="page-home__project-tag-item dash">
										招商 进行
									</view>
								</view>
								<view class="w-100 flex-row space-around">
									<view class="page-home__project-tag-item">
										规划 设计
									</view>
									<view class="page-home__project-tag-item">
										装修 施工
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="page-home__project-des">
					<view class="flex-row">
						<view class="page-home__project-des-item">
							<view class="page-home__project-des-title">商业类型</view>
							<view class="page-home__project-des-content">{{projectInfo.type}}</view>
						</view>
						<view class="page-home__project-des-item">
							<view class="page-home__project-des-title">市场定位</view>
							<view class="page-home__project-des-content">{{projectInfo.location}}</view>
						</view>
						<view class="page-home__project-des-item">
							<view class="page-home__project-des-title">建筑面积</view>
							<view class="page-home__project-des-content">{{projectInfo.area}}</view>
						</view>
						<view class="page-home__project-des-item">
							<view class="page-home__project-des-title">所在城市</view>
							<view class="page-home__project-des-content">{{projectInfo.city}}</view>
						</view>
					</view>
				</view>
				<!-- 火热招商 -->
				<view class="page-home__bus">
					<view class="flex-row">
						<view class="page-home__bus-left">
							<g-sign-block class="page-home__bus-brand" type="primary" size="large">火热招商</g-sign-block>
							<g-effect-display :bannerList="homeInfo.banner" :bannerHeight="135">
							</g-effect-display>
						</view>
						<view class="page-home__bus-right">
							<view class="flex-row">
								<view class="page-home__bus-tag bold">
									业态 需求
								</view>
								<view class="page-home__bus-tag flex-1 flex-text" style="margin-left: 4px;">
									预计开业：{{homeInfo.time}}
								</view>
							</view>
							<view class="flex-row">
								<view class="page-home__bus-tag flex-1 green">
									{{homeInfo.keywords[0]}}
								</view>
								<view class="page-home__bus-tag lh-28 flex-1 yellow m5">
									{{homeInfo.keywords[1]}}
								</view>
								<view class="page-home__bus-tag lh-28 flex-1 yellow">
									{{homeInfo.keywords[2]}}
								</view>
							</view>
							<view class="flex-row">
								<view class="page-home__bus-tag lh-28 flex-1 green">
									{{homeInfo.keywords[3]}}
								</view>
								<view class="page-home__bus-tag lh-28 flex-1 blue m5">
									{{homeInfo.keywords[4]}}
								</view>
								<view class="page-home__bus-tag lh-28 flex-1 blue">
									{{homeInfo.keywords[5]}}
								</view>
							</view>
							<view class="flex-row">
								<view class="page-home__bus-tag w-55 lh-28 yellow">
									{{homeInfo.keywords[6]}}
								</view>
								<view class=".page-home__bus-tag lh-28 flex-1 ml-5" @click="routerHotInvestment">
									参与招商
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 效果展示 -->
				<view class="effect-display-container">
					<g-sign-block class="effect-display-brand" type="default" size="large">效果展示</g-sign-block>
					<g-effect-display :bannerList="effectInfo.banner" :bannerHeight="200">
					</g-effect-display>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import config from '@/config/index.js'
	export default {
		data() {
			return {
				bannerList: config.HomeBannerList,
				companyInfo: config.HomeCompanyInfo,
				projectInfo: config.HomeProjectInfo,
				homeInfo: config.HomeHotInfo,
				effectInfo: config.HomeEffectInfo,
				swiperOption: config.defaultSwiperOptions,
				message: '',
				comments: {
					message: [], // 留言信息
					focusNum: 0, // 关注总数
					focusAvatar: [] // 关注人头像（前五）
				}
			}
		},
		onShow () {
			this.getMessage()
		},
		methods: {
			async submitMessage () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this);
				const message = this.message;
				if (!message || !userInfo) {
					return ;
				}
				try{
					this.$loading('留言中');
					const result = await this.$service.storeMessage({
						message
					}, {
						header: {
							Authorization: userInfo.Authorization
						}
					});
					this.message = '';
					this.getMessage();
					this.$hideloading();
				}catch(e){
					//TODO handle the exception
				}
			},
			// 留言板数据
			async getMessage () {
				try{
					const { data = {} } = await this.$service.fetchMessageList({pageSize: 2}, {})
					this.comments = {
						message: (data.list || []).map(item => ({
							icon: item.user.avatar,
							name: item.user.nick_name,
							message: item.content,
						})),
						focusNum: data.follow_count,
						focusAvatar: (data.avatarArr || []).slice(0, 5)
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			// 跳转项目详情
			routeProjectIntro() {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this, '/packageC/pages/project-intro/index');
				if (!userInfo) {return ;}
				uni.navigateTo({
					url: '/packageC/pages/project-intro/index'
				})
			},
			// 跳转企业详情
			routerCompanyDetail() {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this, '/packageB/pages/company-introduction/index');
				if (!userInfo) {return ;}
				uni.navigateTo({
					url: '/packageB/pages/company-introduction/index'
				})
			},
			// 跳转火热招商详情
			routerHotInvestment () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this, '/packageC/pages/hot-investment/index');
				if (!userInfo) {return ;}
				uni.navigateTo({
					url: '/packageC/pages/hot-investment/index'
				})
			}
		}
	}
</script>

<style lang="less">
	@import './index.less';
</style>
