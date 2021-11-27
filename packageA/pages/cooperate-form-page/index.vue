<!-- 项目介绍-表单提交 -->
<template>
	<view class="page page-project-intro-from">
		<view class="page-wrap">
			<view class="page-container">
				<view class="project-intro">
					<g-sign-block type="primary">项目介绍</g-sign-block>
					<view class="custom-step-container">
						<g-custom-step :stepList="stepList"></g-custom-step>
					</view>
				</view>
				<!-- 表单 -->
				<view class="form-container">
          <view class="title">项目建设中，敬请期待！<br>诚邀与您携手再造城市商旅地标</view>
          <view class="form-content">
            <uni-forms ref="form" :modelValue="form">
            	<uni-forms-item name="name">
                <input type="text" v-model="form.name" placeholder="姓名" @input="binddata('name',$event.detail.value)" />
            	</uni-forms-item>
              <uni-forms-item name="phone">
                <input type="text" v-model="form.phone" placeholder="联系方式" @input="binddata('phone',$event.detail.value)" />
              </uni-forms-item>
              <uni-forms-item name="company">
                <input type="text" v-model="form.company" placeholder="企业/单位" @input="binddata('company',$event.detail.value)" />
              </uni-forms-item>
              <uni-forms-item name="job">
                <input type="text" v-model="form.job" placeholder="部门及职务" @input="binddata('job',$event.detail.value)" />
              </uni-forms-item>
            	<button type="primary" class="submit-btn" @click="submit">提交合作意向</button>
            </uni-forms>
          </view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
  import uniForms from '@/uni_modules/uni-forms/components/uni-forms/uni-forms'
	export default {
    components: { uniForms},
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
        form: {
          name: '',
          phone: '',
          company:'',
          job: ''
        },
        rules: {
          name: {
            rules: [
              { required: true, errorMessage: '请输入姓名', trigger: 'blur change'},
              { minLength: 1, maxLength: 32, errorMessage: '字符长度不超过{maxLength}', trigger: 'blur change'},
              { 
                validateFunction:function(rule,value,data,callback){
                  return true
                }
              }
            ]
          },
          phone: {
            rules: [
              { required: true, errorMessage: '请输入联系方式',trigger: 'blur change' }
            ]
          },
          company: {
            rules: [
              { required: true, errorMessage: '请输入企业/单位', trigger: 'blur change' },
              { minLength: 1, maxLength: 32, errorMessage: '字符长度不超过{maxLength}', trigger: 'blur change'}
            ]
          },
          job: {
            rules: [
              { required: true, errorMessage: '请输入部门及职务', trigger: 'blur change' },
              { minLength: 1, maxLength: 32, errorMessage: '字符长度不超过{maxLength}', trigger: 'blur change'},
            ]
          }
        }
			}
		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		},
    methods:{
      async submit () {
				const { getUserInfo } = this.$util;
				const userInfo = getUserInfo.call(this);
				if (!userInfo) {return ;}
				try{
					const formData = await this.$refs.form.validate();
					this.$loading('发送信息中');
					const result = await this.$service.storeCompanyCoperation({
						name: formData.name,
						phone: formData.phone,
						company: formData.company,
						departmentPosition: formData.job
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
