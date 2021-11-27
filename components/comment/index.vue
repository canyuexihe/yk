<template>
	<view class="comment">
		<view class="comment-wrap">
			<view class="comment-head flex-row">
				<g-image-colspan :images="focusAvatar"></g-image-colspan>
				<text class="comment-text">{{focusNum}}人已关注本项目</text>
				<uni-icons v-if="isFromHome" type="arrowthinright" size="20" @click="goToLeaveMessage"></uni-icons>
				<!-- <text-button 
					v-else 
					@click="goToFormPage"
				>留言</text-button> -->
			</view>
			<view v-if="comments.length" class="comment-list">
				<block v-for="item in comments" :key="item">
					<g-comment-item :info="item"></g-comment-item>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	import textButton from '@/components/text-button/index.vue'
	export default {
		name:'GCommit',
		components: { textButton },
		props: {
			isFromHome: {
				type: Boolean,
				default: true
			},
			focusNum: Number,
			focusAvatar: {
				type: Array,
				default: []
			},
			comments: {
				type: Array,
				default: []
			}
		},
    data () {
      return {
        focusImageArray: []
      }
    },
		methods: {
			goToLeaveMessage () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this, '/packageB/pages/company-introduction/index');
				if (!userInfo) {return ;}
				uni.navigateTo({
					url:"/pages/message-board/index"
				})
			},
			goToFormPage () {
				uni.navigateTo({
					url: "/packageA/pages/message-board-form-page/index"
				})
			}
		}
	}
</script>
<style lang="less">
	@import './index.less';
</style>
