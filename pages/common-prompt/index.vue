<!-- 操作结果提示页面 -->
<template>
  <view class="page page-prompt-container">
  	<view class="page-wrap">
  		<view class="page-container">
        <image :src="successIcon"></image>
        <view class="prompt-text">
          <view v-if="promptType === businessSuccess">
            <view v-if="!errorMessage">
              <text class="text">您已成为本项目的商业伙伴，赶快点击右上角的按钮分享您的期待吧，为进驻开业加油助力！</text>
              <view class="leave-message-text">
                <text>或移步</text>
                <button type="default" class="custom-text-btn" @click="goToMessageBoard">留言板</button>
                <text>为项目助力</text>
              </view>
            </view>
            <view><text class="text">{{ errorMessage }}</text></view>
          </view>
          <view v-else>
            <view>
              留言成功！您的鼓励将是我们前进的动力！您也可以点击右上角的按钮分享您的期待！
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        businessSuccess: 1, // 招商成功
        leaveMessageSuccess: 2, // 留言成功
        promptType: '',
        errorMessage: '', // 接口报错信息
        successIcon: '/static/icon-success.png'
      }
    },
    onLoad: function(option) {
      this.promptType = parseInt(option.type)
      this.errorMessage = option.message
    },
		methods:{
			goToMessageBoard () {
				uni.navigateTo({
					url: "/pages/message-board/index"
				})
			}
		}
  }
</script>
<style lang="less">
	@import './index.less';
</style>
