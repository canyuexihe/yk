<template>
	<view class="page page-project-intro">
		<view class="page-wrap">
			<view class="page-container">
				<view class="project-intro">
					<g-sign-block type="primary">项目介绍</g-sign-block>
					<view class="custom-step-container">
						<g-custom-step :stepList="stepList"></g-custom-step>
					</view>
				</view>
				<!-- 文化街区 -->
				<view class="project-block">
					<view class="title">广州购书中心番禺店（天河城）</view>
					<view class="line">
						<view></view>
						<view></view>
					</view>
					<view class="sub-title orange">
						<text class="sign"></text>
						<text>番禺未来“城市文化生活中心”</text>
					</view>
					<image :src="pro1Img" mode="widthFix" class="w-100"></image>
					<text class="text fn-orange">坐落在番禺万博商圈的公共文化新地标，番禺</text>
					<text class="text fn-333">以周边年轻家庭群图、时尚青年和白领商务、文化追求者、以及周边企业事业单位、学生为客户群体；以“书店即是学习场、空间即是消费”为设计思路，打造凸显广州购书中心IP的文化空间消费场景，使项目成为具备景观环境优美、服务设施齐全、商业模式先进、创新示范型的城市综合文化服务复合空间。</text>
				</view>
				<!-- 创新生活区 -->
				<view class="project-block">
					<view class="sub-title primary">
						<text class="sign"></text>
						<text>无边界消费新场景</text>
					</view>
					<image :src="pro2Img" mode="widthFix" class="w-100"></image>
					<view class="img-group-container">
						<view class="w-33"><image :src="pro21Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro22Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro23Img" mode="widthFix"></image></view>
					</view>
					<text class="text fn-primary">番禹万博商圈公共文化新地标 情景体验·人文博览·文化聚合</text>
					<text class="text fn-333">
						广州番禹天河城以“时尚家庭新生活”为品牌主张，各品牌门店设计是一场“美妆盛宴”，已进驻小鹏汽车、大疆无人机、施华洛世奇、索菲亚、SEPHORA丝芙兰等时尚大牌、承办过华南首场漫威主题展、悦动森林全国首展、“蒸汽朋克”主题儿童乐园、甦·漫步 艺术展等—“以无边界的消费新场景向消费者传递休闲、精致的生活理念。”
					</text>
					<!-- <view class="sub-title text-intro default">
						<text class="sign"></text>
						<text>建筑面积：</text>
						<text class="fn-333">3690 ㎡</text>
					</view>
					<view class="sub-title text-intro default">
						<text class="sign"></text>
						<text class="text-over">招商业态：<text class="fn-333">企业总部基地、企业研讨中心、文化交流中心</text></text>
					</view> -->
				</view>
				<!-- 潮尚生活区 -->
				<view class="project-block">
					<view class="sub-title orange">
						<text class="sign"></text>
						<text>自然意向</text>
					</view>
					<image :src="pro3Img" mode="widthFix" class="w-100"></image>
					<!-- <view class="img-group-container">
						<view class="w-18"><image :src="pro31Img" mode="widthFix"></image></view>
						<view class="w-32"><image :src="pro32Img" mode="widthFix"></image></view>
						<view class="w-32"><image :src="pro33Img" mode="widthFix"></image></view>
						<view class="w-18"><image :src="pro34Img" mode="widthFix"></image></view>
					</view> -->
					<!-- <view class="sub-title text-intro orange2">
						<text class="sign"></text>
						<text>建筑面积：</text>
						<text class="fn-333">17155 ㎡</text>
					</view>
					<view class="sub-title text-intro orange2">
						<text class="sign"></text>
						<text class="text-over">招商业态：<text class="fn-333">潮牌潮品集合店、网红潮店集合、美学生活馆、国潮风主题店</text></text>
					</view> -->
					<text class="text fn-primary">地缘文化、传统建造、情感共鸣</text>
					<text class="text fn-333">
						以传统、自然空间美学为载体，结合情景体验的解构重组，让空间产生新的阅读维度。
					</text>
				</view>
				<!-- 鉴赏 娱乐 人文生活区 -->
				<view class="project-block">
					<view class="sub-title primary">
						<text class="sign"></text>
						<text>城市美学</text>
					</view>
					<image :src="pro4Img" mode="widthFix" class="w-100"></image>
					<!-- <view class="img-group-container">
						<view class="w-33"><image :src="pro41Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro42Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro43Img" mode="widthFix"></image></view>
					</view> -->
					<!-- <view class="sub-title text-intro default">
						<text class="sign"></text>
						<text>建筑面积：</text>
						<text class="fn-333 mt-8">鉴赏生活区：7570㎡，娱乐生活区：9500㎡，人文生活区：1930㎡</text>
					</view>
					<view class="sub-title text-intro default">
						<text class="sign"></text>
						<text>招商业态：</text>
						<text class="fn-333 mt-8">鉴定中心、交易中心、寄拍卖中心、慢摇吧、音乐餐吧、主题酒吧、咖啡书屋、蒋百里纪念馆/徐志摩研究院（名人馆）/史东山故居/晋丰米栈</text>
					</view>
					<view class="sub-title text-intro default">
						<text class="sign"></text>
						<text>历史记忆：</text>
						<text class="fn-333 mt-8">晋丰米行、史东山故居等老建筑。在老街现存的东牛弄、西牛弄两条老巷，沿街店面甚为简朴，后面住宅则相对考究，门窗、外檐等构件雕刻精美，内进门楼砖雕高大坚实，精雕细琢，各建筑以马头墙间隔，颇有吴越江南古风。</text>
					</view> -->
					<text class="text fn-primary">空间多维、质朴简约、情景塑造</text>
					<text class="text fn-333">
						多维度、抽象化的构建空间，将空间、城市、人、书籍巧妙的平衡联系起来，营造静谧至净的文化意境，激发人们对知识的兴趣与渴求。
					</text>
				</view>
				<!-- 行旅生活区 -->
				<view class="project-block">
					<view class="sub-title orange">
						<text class="sign"></text>
						<text>进驻品牌</text>
					</view>
					<image :src="pro5Img" mode="widthFix" class="w-100"></image>
					<view class="img-group-container">
						<view class="w-33"><image :src="pro51Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro52Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro53Img" mode="widthFix"></image></view>
					</view>
					<text class="text fn-primary">BlankPage艺术绘馆——广州DIY手工坊前十品牌</text>
					<text class="text fn-333">
						感受到高雅的艺术、徜徉艺术世界的旅途、沉浸式定格生活的美、CBD里的创造空间-来自消费者的认可
					</text>
					<image :src="pro55Img" mode="widthFix" class="w-100"></image>
					<text class="text fn-primary">卓越琴行——广州超二十年经典品牌</text>
					<text class="text fn-333">
						钢琴世家般的专业、新视角为爱公益、优雅魅力音乐系列-来自消费者的认可
					</text>
					<text class="text fn-primary">
						另有LP生活馆、言瓷有礼、光明园迪、立心文具、翼呀智能点读笔等品牌已入住天河城购书中心。
					</text>
					<!-- <view class="sub-title text-intro orange2">
						<text class="sign"></text>
						<text>建筑面积：</text>
						<text class="fn-333">5215 ㎡</text>
					</view>
					<view class="sub-title text-intro orange2">
						<text class="sign"></text>
						<text>招商业态：<text class="fn-333">水乡民宿，精品酒店，康养主题区</text></text>
					</view> -->
				</view>
				<!-- 海宁城市社交空间 -->
				<view class="project-block">
					<view class="sub-title primary">
						<text class="sign"></text>
						<text>多元文化（广州购书中心）</text>
					</view>
					<image :src="pro6Img" mode="widthFix" class="w-100"></image>
					<text class="text fn-primary">1.5万平方米经营面积、超30万中图书、音像制品、年客流量超1200万</text>
					<text class="text fn-333">
						广州购书中心艺术展览、文创品牌、创客教育一体。2021“百年润泽 书香致远”主题活动400多场，广州读书月期间，广州购书中心、广州新华书店等门店重点推荐。
					</text>
					<view class="img-group-container">
						<view class="w-33"><image :src="pro61Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro62Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro63Img" mode="widthFix"></image></view>
					</view>
					<text class="text fn-primary">B1-New page 进口原版图书（左）；1F-风尚生活/环游行摄（中）；2F-爱乐坊（右）</text>
					<view class="img-group-container">
						<view class="w-33"><image :src="pro64Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro65Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro66Img" mode="widthFix"></image></view>
					</view>
					<text class="text fn-primary">3F-文学/艺术（左）；4F-童梦园（中）；5F-科技（右）</text>
					<view class="img-group-container">
						<view class="w-50"><image :src="pro67Img" mode="widthFix"></image></view>
						<view class="w-50"><image :src="pro68Img" mode="widthFix"></image></view>
					</view>
					<text class="text fn-primary">6F-广州高地文化空间（左）；7F-高地企业联盟（右）</text>
				</view>
				<!-- 海宁人的会客厅 -->
				<view class="project-block">
					<view class="sub-title orange">
						<text class="sign"></text>
						<text>你我的城市文化 生活中心</text>
					</view>
					<image :src="pro7Img" mode="widthFix" class="w-100"></image>
					<text class="text fn-orange tc">情景体验 人文博览 文化聚合</text>
					<!-- <text class="text fn-333">
						广州购书中心艺术展览、文创品牌、创客教育一体。2021“百年润泽 书香致远”主题活动400多场，广州读书月期间，广州购书中心、广州新华书店等门店重点推荐。
					</text>
					<view class="img-group-container">
						<view class="w-33"><image :src="pro71Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro72Img" mode="widthFix"></image></view>
						<view class="w-33"><image :src="pro73Img" mode="widthFix"></image></view>
					</view> -->
				</view>
				<!-- 潮起海宁 未来已来 -->
				<!-- <view class="project-block">
					<view class="sub-title primary">
						<text class="sign"></text>
						<text>潮起海宁 未来已来</text>
					</view>
					<image :src="pro8Img" mode="widthFix" class="w-100"></image>
					<text class="text fn-primary text-center mb-0">长江三角洲经济圈核心腹地</text>
					<text class="text fn-primary text-center mt-5">沪杭甬苏“一小时经济圏”</text>
					<text class="text fn-333">毗邻上海、接壤杭州，是杭州都市经济区的核心区和杭州湾经济区的重点支撑平台。地理位置优越，共享资源丰富。60分钟可依托高速铁路、髙速公路抵达杭州、上海等周边主要城市,30分钟可达嘉兴及市内各镇,15分钟可达市域核心枢纽。经济发达，人口密集，常住人口达84.4万人，打造长三角升级版“经济活力强市、文化旅游名市、生态宜居新市”。</text>
				</view> -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data () {
			return {
				stepList:[{
					name: '市场调研',
					status: 'finish'
				},{
					name: '商业定位',
					status: 'finish'
				},{
					name: '规划设计',
					status: 'finish'
				},{
					name: '改造施工',
					status: 'finish'
				},{
					name: '招商进行',
					status: 'active'
				}, {
					name: '正式开业',
					status: 'active'
				}],
				pro1Img: '/packageC/static/project-1.pngsw',
				pro2Img: '/packageC/static/project-2.png',
				pro21Img: '/packageC/static/2-2.png',
				pro22Img: '/packageC/static/2-3.png',
				pro23Img: '/packageC/static/2-4.png',
				pro3Img: '/packageC/static/3-1.png',
				pro4Img: '/packageC/static/4-1.png',
				pro5Img: '/packageC/static/5-1.png',
				pro51Img: '/packageC/static/5-2.png',
				pro52Img: '/packageC/static/5-3.png',
				pro53Img: '/packageC/static/5-4.png',
				pro55Img: '/packageC/static/5-5.png',
				pro6Img: '/packageC/static/6-1.png',
				pro61Img: '/packageC/static/6-2.png',
				pro62Img: '/packageC/static/6-3.png',
				pro63Img: '/packageC/static/6-4.png',
				pro64Img: '/packageC/static/6-5.png',
				pro65Img: '/packageC/static/6-6.png',
				pro66Img: '/packageC/static/6-7.png',
				pro67Img: '/packageC/static/6-8.png',
				pro68Img: '/packageC/static/6-9.png',
                pro7Img: '/packageC/static/7.png'
			}
		}
	}
</script>

<style lang="less">
	@import './index.less';
</style>
