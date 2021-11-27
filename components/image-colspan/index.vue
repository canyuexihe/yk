<template>
	<view class="g-image-colspan">
		<view class="g-image-colspan__content">
			<image v-for="item in images" :key="item" :src="item" mode="scaleToFill" class="g-image-colspan__image"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GImageColspan',
		props: {
			images: {
				type: Array
			}
		},
		data () {
			return {}
		}
	}
</script>

<style lang="less">
	.g-image-colspan {
		.g-image-colspan__content {
			display: flex;
			flex-direction: row;
		}
		.g-image-colspan__image {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			& + .g-image-colspan__image {
				margin-left: -16px;
			}
		}
	}
</style>
