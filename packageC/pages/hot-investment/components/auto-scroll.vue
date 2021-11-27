<template>
	<view class="g-auto-scroll" :style="{height: wrapHeight + 'px'}">
		<view class="g-auto-scroll__container">
			<view class="g-auto-scroll__content" :animation="animationData">
				<slot ref="container"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'XAutoScroll',
		props: {
			wrapHeight: Number,
			wrapWidth: Number,
			animateOption: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data () {
			return {
				moveAnimation: null,
				resetAnimation: null,
				animationData: {},
				timer: null
			}
		},
		computed: {
			options () {
				const option = this.animateOption;
				return Object.assign({
					duration: 20000,
					transformOrigin: '0 50%',
					timingFunction: 'linear',
					delay: 0,
				}, option)
			}
		},
		created () {
			const { options } = this;
			this.moveAnimation = uni.createAnimation(options);
			this.resetAnimation = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 0,
				timingFunction: 'linear'
			})
		},
		mounted () {
			this.startAnimate()
		},
		beforeDestroy () {
			this.clearTime();
		},
		methods: {
			clearTime () {
				if (this.timer) {
					console.log('去除定时器');
					clearTimeout(this.timer);
					this.timer = null;
					this.resetPosition();
				}
			},
			startAnimate () {
				if (this.timer) {return}
				const { moveAnimation } = this;
				console.log('开始', this.wrapWidth);
				this.endAnimate();
				
				this.$nextTick(() => {
					moveAnimation.translateX(this.wrapWidth * -1).step();
					this.animationData = moveAnimation.export();
				})
				
			},
			resetPosition () {
				const { resetAnimation } = this;
				resetAnimation.translateX(0).step();
				this.animationData = resetAnimation.export();
			},
			endAnimate () {
				const { options } = this;
				let timer = setTimeout(() => {
					console.log('停止');
					this.timer = null;
					this.resetPosition();
					this.$nextTick(() => {
						this.startAnimate();
					})
				}, options.duration);
				this.timer = timer;
			}
		}
	}
</script>

<style lang="less">
	.g-auto-scroll {
		width: 100%;
		.g-auto-scroll__container {
			position: relative;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.g-auto-scroll__content {
			position: absolute;
			left: 0;
			top: 0;
			width: 9999px;
			height: 100%;
		}
	}
</style>
