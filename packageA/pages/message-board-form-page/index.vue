<template>
	<view class="page page-message-board-form">
		<view class="page-wrap">
			<view class="page-container">
				<uni-forms ref="form" :modelValue="form" :rules="rules">
					<uni-forms-item name="message">
				    <textarea
							class="page-message-board__input"
							placeholder-class="page-message-board__input-placeholder"
							type="text"
							v-model="form.message"
							placeholder="您的鼓励将是我们前进的动力"
							@input="binddata('message',$event.detail.value)"
						/>
					</uni-forms-item>
					<button type="default" class="submit-btn" @click="submit">关注并留言</button>
				</uni-forms>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MessageBoardFormPage',
		data () {
			return {
				hasFocus: false,
				form: {
					message: ''
				},
				rules: {
				  message: {
						rules: [
							{ required: true, errorMessage: '请输入意见', trigger: 'blur change'}
						]
					}
				}
			}
		},
		onShow () {
			this.fetchConfig();
		},
		methods: {
			async fetchConfig () {
				try{
					const { data: config } = await this.$service.fetchConfig({}, {});
					this.hasFocus = config.is_follow;
				}catch(e){
					console.log('err', e)
					//TODO handle the exception
				}
			},
			// 关注项目
			async focusPro () {
				if (!this.hasFocus) {
					try{
						const { globalData } = getApp();
						const result = await this.$service.focusProject({}, {
							header: {
								Authorization: globalData.userInfo.Authorization
							}
						});
					}catch(e){
						//TODO handle the exception
					}
				}
			},
			async submit () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this);
				if (!userInfo) {return ;}
				try{
					const formData = await this.$refs.form.validate();
					this.$loading('留言中');
					this.focusPro();
					const result = await this.$service.storeMessage({
						message: formData.message
					}, {
						header: {
							Authorization: userInfo.Authorization
						}
					});
					this.$hideloading();
					uni.redirectTo({
					  url:`/pages/common-prompt/index?type=2&message=留言失败`
					})
				}catch(e){
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="less">
	.page-message-board-form {
		.page-container {
			height: 100%;
			padding: 20px 40px;
			background-color: #fff;
		}
		.page-message-board__input {
			width: 100%;
			height: 150px;
			background: #FFFFFF;
			border-radius: 4px;
			border: 1px solid #0E4A86;
			margin-bottom: 10px;
			padding: 14px;
			box-sizing: border-box;
		}
		.page-message-board__input-placeholder {
			font-weight: 400;
			color: #DCDCDC;
		}
	}
</style>
