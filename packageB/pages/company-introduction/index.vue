<template>
	<!-- 企业介绍 -->
	<view class="page page-company-intro">
		<view class="page-wrap">
			<view class="page-container">
				<!-- 头部banner -->
				<swiper
					class="banner"
					:indicator-dots="swiperOption.indicatorColor"
					:indicator-active-color="swiperOption.indicatorActiveColor"
					:autoplay="swiperOption.autoplay"
					:interval="swiperOption.interval"
					:duration="1000"
					:current="swiperOption.current"
				>
					<swiper-item v-for="(item, index) in bannerList" :key="index">
						<image class="banner-item" mode="widthFix" :src="item" @click="previewImage"></image>
					</swiper-item>
				</swiper>
				<!-- 文化街 -->
				<view class="cultrue-street">
					<view class="title">
						<text>广州购书中心番禺店（天河城）</text>
						<image :src="shiledIcon"></image>
					</view>
					<text class="address">地址：广州市番禹区万博商务区天河城购物中心小L四整层</text>
				</view>
				<!-- 联系方式 -->
				<view class="contact-block">
					<view><image :src="personIcon"></image></view>
					<view>黄经理</view>
					<view><image :src="phoneIcon"></image></view>
					<view>
            <text v-if="isSubmit">{{ mobilePhone }}</text>
						<company-introduction-dialog v-else>{{promptText}}</company-introduction-dialog>
					</view>
					<view><image :src="peopleIcon"></image></view>
					<view>座机</view>
					<view><image :src="phoneIcon"></image></view>
					<view>
						<text v-if="isSubmit">{{ phone }}</text>
						<company-introduction-dialog v-else>{{promptText}}</company-introduction-dialog>
					</view>
				</view>
				<!-- 企业简介 -->
				<view class="company-intro">
					<view class="common-title">
						<g-sign-block type="default" size="large">企业简介</g-sign-block>
						<view class="right">
							<view>
								<text>项目方：</text>
								<text>广州购书中心</text>
							</view>
							<image :src="companyShiledIcon"></image>
						</view>
					</view>
					<view class="text">
						<text>
							广州购书中心被誉为“神州第一书城”的广州购书中心于1994年11月23日开业，是当时全国范围内第一家大型书城，现为广州新华出版发行集团股份有限公司下属一级子公司。 2014年，广州购书中心以 “城市文化生活中心”为定位、 以“读书人的家园、青少年的乐园、文化产业的创意园”为目标，在全国率先开启升级转型。2017年，广州购书中心被 评为中国“最美新华书店”、 全国“百佳文化地标”。
						</text>
					</view>
				</view>
				<!-- 关联项目 -->
				<view class="related-project">
					<view class="common-title">
						<g-sign-block type="default" size="large">关联项目</g-sign-block>
						<view class="right">
							<view>
								<text class="fs-12">该企业的还有其它10个项目正在进行</text>
							</view>
							<image :src="companyShiledIcon"></image>
						</view>
					</view>
					<!--
					<view class="city-view">
						<view class="title">深圳 华侨城 · 欢乐海岸</view>
						<view class="line">
							<view></view>
							<view></view>
						</view>
						<image :src="szBg"></image>
					</view>
					<view class="city-view">
						<view class="title">湘潭 窑湾历史文化街</view>
						<view class="line">
							<view></view>
							<view></view>
						</view>
						<image :src="xtBg"></image>
					</view>
					-->
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import config from '@/config/index.js'
	import CompanyIntroductionDialog from './components/popup';
	
	export default {
		components: {
			CompanyIntroductionDialog
		},
		data() {
			return {
				swiperOption: config.defaultSwiperOptions,
				bannerList: config.CompanyBannberList,
				shiledIcon: '/packageB/static/icon-shield.png',
				personIcon: '/packageB/static/icon-person.png',
				peopleIcon: '/packageB/static/icon-people.png',
				phoneIcon: '/packageB/static/icon-phone.png',
				companyShiledIcon: '/packageB/static/icon-company-shield.png',
				szBg: '/packageB/static/sz.png',
				xtBg: '/packageB/static/xt.png',
				mobilePhone: '15757176843',
				phone: '0571-88192971',
				promptText: '点击查看',
				hasSubmitCompany: false,
				hasSubmitHot: false
			}
		},
		computed: {
			isSubmit () {
				return this.hasSubmitCompany || this.hasSubmitHot;
			}
		},
		onShow () {
			this.fetchConfig();
		},
		methods: {
			previewImage (current) {
				const { bannerList } = this;
				uni.previewImage({
					current,
					urls: bannerList
				})
			},
			async fetchConfig () {
				try{
					const { data: config } = await this.$service.fetchConfig({}, {});
					this.hasSubmitCompany = config.introduce_sub;
					this.hasSubmitHot = config.hot_sub;
				}catch(e){
					console.log('err', e)
					//TODO handle the exception
				}
			}
		}
	}
</script>
<style lang="less">
	@import './index.less';
</style>
