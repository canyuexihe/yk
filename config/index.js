import devConfig from './config.dev.json';
import prodConfig from './config.prod.json';

const isTest = process.env.NODE_ENV == 'development';

export default {
	isTest,
	...(isTest ? devConfig : prodConfig),
	// swiper配置
	defaultSwiperOptions: {
		duration: 1000,
		interval: 3000,
		autoplay: false,
		current: 0,
		indicatorDots: true,
		indicatorColor: '#fff',
		indicatorActiveColor: '#6C6C6C'
	},
	// 首页banner
	HomeBannerList: [
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-banner-1.png',
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-banner-2.png',
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-banner-3.png'
	],
	// 公司信息
	HomeCompanyInfo: {
		name: '广州购书中心番禺店（天河城）',
		adr: '广州市番禹区万博商务区天河城购物中心小L四整层',
		project: '广州购书中心'
	},
	// 项目信息
	HomeProjectInfo: {
		name: '广州购书中心番禺店',
		type: '购物中心',
		location: '中高端',
		area: '15000 m2',
		city: '广州 番禺区',
		banner: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/pro-7.png'
	},
	// 首页火热招商
	HomeHotInfo: {
		time: '2021年10月',
		keywords: [
			'城市美学空间',
			'潮智科技',
			'儿童文创',
			'艺术生活',
			'时尚零售',
			'商务休闲',
			'精致简餐'
		],
		banner: [
			{
				title: '购书中心-4F',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-hot-banner-1.png'
			},
			{
				title: '购书中心-4F',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-hot-banner-2.png'
			}
		]
	},
	// 首页效果展示
	HomeEffectInfo: {
		banner: [
			{
				title: '文创集合店',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/pro-2.png'
			},
			{
				title: '文创集合店',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/pro-3.png'
			},
			{
				title: '文创集合店',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/pro-4.png'
			},
			{
				title: '文创集合店',
				url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/pro-5.png'
			}
		]
	},
	
	// 火热招商banner
	HotBannerList: [
		{
			title: '购书中心-4F',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-hot-banner-1.png'
		},
		{
			title: '购书中心-4F',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/home-hot-banner-2.png'
		}
	],
	HotEffectBanner: [
		{
			title: '创新生活区',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-2.jpg'
		},
		{
			title: '潮尚生活区',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-3.jpg'
		},
		{
			title: '鉴赏 娱乐 人文生活区',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-4.jpg'
		},
		{
			title: '行旅生活区',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-5.jpg'
		},
		{
			title: '海宁城市社交空间',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-6.jpg'
		},
		{
			title: '海宁人的会客厅',
			url: 'https://muke666.oss-cn-hangzhou.aliyuncs.com/static/pro-7.jpg'
		}
	],
	
	// 企业详情
	CompanyBannberList: [
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/2-2.png',
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/2-3.png',
		'https://muke666.oss-cn-hangzhou.aliyuncs.com/107/2-4.png'
	]
}