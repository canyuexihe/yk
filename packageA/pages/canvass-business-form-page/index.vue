<template>
	<view class="page page-canvass-business-from">
		<view class="page-wrap">
			<view class="page-container">
				<view class="form-content">
					<uni-forms ref="form" :modelValue="form">
						<uni-forms-item name="brand">
							<input type="text" v-model="form.brand" placeholder="品牌名称"
								@input="binddata('brand',$event.detail.value)" />
						</uni-forms-item>
						<uni-forms-item name="city">
							<input type="text" v-model="form.city" placeholder="拓展城市"
								@input="binddata('city',$event.detail.value)" />
						</uni-forms-item>
						<uni-forms-item name="name">
							<input type="text" v-model="form.name" placeholder="姓名"
								@input="binddata('name',$event.detail.value)" />
						</uni-forms-item>
						<uni-forms-item name="job">
							<input type="text" v-model="form.job" placeholder="职务"
								@input="binddata('job',$event.detail.value)" />
						</uni-forms-item>
						<uni-forms-item name="phone">
							<input type="text" v-model="form.phone" placeholder="联系方式"
								@input="binddata('phone',$event.detail.value)" />
						</uni-forms-item>
						<uni-forms-item name="message">
							<textarea class="input" placeholder-class="input-placeholder" type="text"
								v-model="form.message" placeholder="其它说明，例如位置要求、面积要求、配电、排污、卫生间等"
								@input="binddata('message',$event.detail.value)" />
						</uni-forms-item>
						<button type="primary" class="submit-btn" @click="submit">参与招商</button>
					</uni-forms>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					brand: '',
					city: '',
					name: '',
					job: '',
					phone: '',
					message: ''
				},
				rules: {
					brand: {
						rules: [{
								required: true,
								errorMessage: '请输入品牌名称',
								trigger: 'blur change'
							},
							{
								minLength: 1,
								maxLength: 32,
								errorMessage: '字符长度不超过{maxLength}',
								trigger: 'blur change'
							}
						]
					},
					city: {
						rules: [{
								required: true,
								errorMessage: '请输入拓展城市',
								trigger: 'blur change'
							},
							{
								minLength: 1,
								maxLength: 32,
								errorMessage: '字符长度不超过{maxLength}',
								trigger: 'blur change'
							}
						]
					},
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入姓名',
								trigger: 'blur change'
							},
							{
								minLength: 1,
								maxLength: 32,
								errorMessage: '字符长度不超过{maxLength}',
								trigger: 'blur change'
							}
						]
					},
					job: {
						rules: [{
								required: true,
								errorMessage: '请输入职务',
								trigger: 'blur change'
							},
							{
								minLength: 1,
								maxLength: 32,
								errorMessage: '字符长度不超过{maxLength}',
								trigger: 'blur change'
							},
						]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请输入联系方式',
							trigger: 'blur change'
						}]
					},
					message: {
						rules: [{
							required: true,
							errorMessage: '请输入说明',
							trigger: 'blur change'
						}]
					}
				}
			}
		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			async submit () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this);
				if (!userInfo) {return ;}
				try{
					const formData = await this.$refs.form.validate();
					this.$loading('发送信息中');
					const result = await this.$service.storeCompanyBusiness({
						brandName: formData.brand,
						city: formData.city,
						name: formData.name,
						position: formData.job,
						phone: formData.phone,
						content: formData.message
					}, {
						header: {
							Authorization: userInfo.Authorization
						}
					});
					if (result.hasError) {return;}
					this.$hideloading();
					uni.navigateTo({
					  url:`/pages/common-prompt/index?type=1&message=`
					})
				}catch(e){
					console.log('error', e)
					//TODO handle the exception
				}
			}
		}
	}
</script>
<style lang="less">
	@import './index.less';
</style>
