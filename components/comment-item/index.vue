<template>
	<view class="g-comment-item">
		<view class="g-comment-item__wrap">
			<view class="g-comment-item__thumbnail">
				<image :src="info.icon" mode="scaleToFill" :lazy-load="true" class="g-comment-item__image"></image>
			</view>
			<view class="g-comment-item__content">
				<view class="g-comment-item__title">
					<text class="g-comment-item__username">{{ info.name }}</text>
					<text class="g-comment-item__sub-text">刚刚查看了项目 并说：</text>
				</view>
				<view class="g-comment-item__desc">
					<text>{{ info.message }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GCommentItem',
		props: {
			info: {
        type: Object,
        default: () => {}
      }
		},
		data () {
			return {}
		}
	}
</script>

<style lang="less">
	.g-comment-item {
		width: 100%;
		.g-comment-item__wrap {
			display: flex;
			flex-direction: row;
			.g-comment-item__image {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				& + .g-comment-item__content {
					margin-left: 13px;
				}
			}
			.g-comment-item__content {
				flex: 1;
				line-height: 20px;
				font-size: 14px;
				font-weight: 400;
				color: #333333;
				padding-left: 13px;
			}
			.g-comment-item__username {
				color: #0E4A86;
				margin-right: 5px;
			}
			.g-comment-item__desc {
				margin: 5px 0 10px 0;
				background: #F0F0F0;
				border-radius: 2px;
				line-height: 17px;
				padding: 6px 13px;
				border-radius: 2px;
			}
		}
	}
</style>
