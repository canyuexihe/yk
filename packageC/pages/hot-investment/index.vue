<template>
	<view class="page page-hot-investment">
		<view class="page-wrap">
			<view class="page-container">
				<view class="investment">
					<g-sign-block type="primary" size="large">火热招商</g-sign-block>
					<view class="investment-people">
						<x-auto-scroll v-if="scrollWidth" ref="scroll" :wrapHeight="36" :wrapWidth="scrollWidth">
							<view class="investment-people-content">
								<view v-for="(item, idnex) in investmentPeopleList" :key="index" class="investment-people-item">
									<image :src="item.headIcon"></image>
									<text>{{ item.name || ''}}</text>
									<text>正在参与</text>
								</view>
							</view>
						</x-auto-scroll>
					</view>
				</view>
				<!-- 火热招商banner -->
				<view class="hot-banner">
					<g-effect-display :bannerList="hotBannerList" :bannerHeight="200">
					</g-effect-display>
				</view>
				<!-- 效果展示 -->
				<view class="effect-display-container">
					<g-sign-block class="effect-display-brand" type="default" size="large">效果展示</g-sign-block>
					<g-effect-display :bannerList="effectInfo.banner" :bannerHeight="250">
					</g-effect-display>
				</view>
				<!-- 业态需求 -->
				<view class="format-demand">
					<view class="format-demand-content flex-row justify-between">
						<g-sign-block style="margin-right: 10px;" type="default" size="large">业态需求</g-sign-block>
						<block v-for="(item, index) in signList" :key="index">
							<view :class="['sign', item.color, item.cls]">{{item.name}}</view>
						</block>
					</view>
					<view class="format-demand-content flex-row">
						<block v-for="(item, index) in secondSignList" :key="index">
							<view :class="['sign', item.color]">{{item.name}}</view>
						</block>
					</view>
				</view>
				<view class="format-demand-footer">
					<view class="left">
						<view>
							<g-sign-block type="default" :isCustomSize="true" :customSize="[70,36,10]"
								@click="callPhone">联系方式</g-sign-block>
						</view>
						<view>
							<g-sign-block type="primary" :isCustomSize="true" :customSize="[100,36,10]"
								@click="downLoadFile">下载招商手册</g-sign-block>
						</view>
					</view>
					<g-sign-block
						type="default"
						:isCustomSize="true"
						:customSize="[100,36,10]"
						@click="goToCanvassBusinessFormPage"
					>
						提交意向
					</g-sign-block>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import config from '@/config/index.js'
	import XAutoScroll from './components/auto-scroll.vue'
	import api from '@/core/service/api.js'
	
	export default {
		components: {
			XAutoScroll
		},
		data () {
			return {
				investmentPeopleList: [],
				scrollWidth: 0,
				swiperOption: config.defaultSwiperOptions,
				hotBannerList: config.HotBannerList,
				effectInfo: config.HomeEffectInfo,
				signList: [{
					name: '城市美学 空间',
					color: 'green',
					cls: 'lg-1',
				}, {
					name: '潮智科技',
					color: 'yellow'
				}, {
					name: '儿童文创',
					color: 'yellow'
				}, {
					name: '艺术生活',
					color: 'yellow'
				}, {
					name: '时尚零售',
					color: 'blue'
				}],
				secondSignList: [{
					name: '商务休闲',
					color: 'blue'
				}, {
					name: '精致简称',
					color: 'brown'
				}, {
					name: '跨界娱乐',
					color: 'brown'
				}, {
					name: '智能家居',
					color: 'brown'
				}]
			}
		},
		onLoad() {
			this.getInvestmentPeopleList()
		},
		onShow () {
			console.log('onShow');
			if (this.$refs.scroll) {
				this.$refs.scroll.startAnimate();
			}
		},
		onHide () {
			console.log('onHide');
			if (this.$refs.scroll) {
				this.$refs.scroll.clearTime();
			}
		},
		methods: {
			// 获取正在参与招商的用户
			async getInvestmentPeopleList () {
				try{
					const { data = [] } = await api.fetchHotUserJoin({}, {});
					this.investmentPeopleList = data.map(item => ({
						name: item.nick_name,
						headIcon: item.avatar
					}))
					this.scrollWidth = 160 * this.investmentPeopleList.length
				}catch(e){
					console.log('err', e)
					//TODO handle the exception
				}
			},
			// 打电话
			callPhone() {
				uni.navigateTo({
					url: '/packageB/pages/company-introduction/index'
				})
			},
			// 下载文件
			downLoadFile() {
				uni.showToast({
					title: '敬请期待',
					position: 'center'
				})
			},
			// 提交招商意向
			goToCanvassBusinessFormPage() {
				uni.navigateTo({
					url: '/packageA/pages/canvass-business-form-page/index'
				})
			}
		}
	}
</script>
<style lang="less">
	@import './index.less';
</style>
