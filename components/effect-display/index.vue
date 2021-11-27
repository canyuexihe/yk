<template>
  <view class="effect-display">
		<view class="effect-banner">
			<swiper
				:indicator-dots="swiperOption.indicatorColor"
				:indicator-active-color="swiperOption.indicatorActiveColor"
				:autoplay="swiperOption.autoplay"
				:interval="swiperOption.interval"
				:duration="1000"
				:current="swiperOption.current"
				:style="{'height': `${wrapHeight}px`}"
			>
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<view class="effect-banner-item">
						<view class="title">
							<text>{{ item.title }}</text>
						</view>
						<view class="carousel-image" :style="{'height': `${bannerHeight}px`}">
							<image mode="widthFix" :src="item.url" @click="() => previewImage(index)"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
  </view>
</template>

<script>
  export default {
		name: 'GEffectDisplay',
    props: {
      bannerHeight:{
        type:Number,
        default: 150
      },
      bannerList: {
        type: Array,
        default: []
      }
    },
		computed: {
			wrapHeight () {
				return this.bannerHeight + 40
			}
		},
    data () {
      return {
        swiperOption: {
        	duration: 1000,
        	interval: 3000,
        	autoplay: false,
        	current: 0,
        	indicatorDots: true,
        	indicatorColor: '#fff',
        	indicatorActiveColor: '#6C6C6C'
        }
      }
    },
		methods: {
			previewImage (current) {
				const { bannerList } = this;
				uni.previewImage({
					current,
					urls: bannerList.map(item => item.url)
				})
			}
		}
  }
</script>

<style lang="less">
  .effect-display {
    position: relative;
    .effect-banner {
			width: 100%;
			height: 100%;
      .effect-banner-item {
        position: relative;
        width: 100%;
				.carousel-image {
					width: 100%;
					padding: 10px 16px;
					background-color: #fff;
				}
				image {
					display: block;
					width: 100%;
					height: 100% !important;
				}
        .title {
          width: 100%;
          height: 40px;
					line-height: 40px;
          text-align: center;
          font-weight: bold;
					color: #333;
					background-color: #fff;
        }
      }
    }
  }
</style>
