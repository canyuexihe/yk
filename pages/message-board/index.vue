<template>
	<view class="page page-message-board">
		<view class="page-wrap">
			<view class="page-container">
				<g-comment :isFromHome="false" :comments="comments.message" :focusNum="comments.focusNum" :focusAvatar="comments.focusAvatar"></g-comment>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			// 留言板数据
			async getMessage () {
				try{
					const { data = {} } = await this.$service.fetchMessageList({pageSize: 100}, {})
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
			}
		}
	}
</script>

<style lang="less">
	@import './index.less';
</style>
