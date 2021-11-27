<template>
	<g-combine-popup ref="combinePopup">
		<view slot="trigger"><slot></slot></view>
		<view class="component-introduction-dialog">
			<view class="component-introduction-dialog__content">
				<view class="component-introduction-dialog__button" @click="routerCooperation">商户合作</view>
				<view class="component-introduction-dialog__button is-primary" @click="routerJoin">参与招商</view>
			</view>
		</view>
	</g-combine-popup>
</template>

<script>
	export default {
		name: 'CompanyIntroductionDialog',
		data () {
			return {}
		},
		methods: {
			routerCooperation () {
				uni.navigateTo({
					url: '/packageA/pages/cooperate-form-page/index'
				})
        this.$refs.combinePopup.closeDialog()
			},
			routerJoin () {
				uni.navigateTo({
					url: '/packageA/pages/canvass-business-form-page/index'
				})
        this.$refs.combinePopup.closeDialog()
			}
		}
	}
</script>

<style lang="less">
	.component-introduction-dialog {
		width: 100vw;
		padding: 0 16px;
		.component-introduction-dialog__content {
			width: 100%;
			height: 200px;
			background-color: #fff;
			border-radius: 4px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 0 40px;
		}
		.component-introduction-dialog__button {
			width: 100%;
			height: 50px;
			background: #FFFFFF;
			border-radius: 4px;
			border: 1px solid #0E4A86;
			color: #0E4A86;
			line-height: 48px;
			text-align: center;
			& + .component-introduction-dialog__button {
				margin-top: 13px;
			}
			&.is-primary {
				background: #0E4A86;
				color: #fff;
			}
		}
	}
</style>
