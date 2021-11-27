<template>
	<view class="text-button-container">
		<button 
			type="default" 
			class="text-button"
			@click="clickEvent"
		><slot></slot></button>
	</view>
</template>

<script>
	export default {
    name:'GTextButton',
		methods: {
			clickEvent () {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="less">
	.text-button-container {
		.text-button {
			background: #fff;
			font-size: 14px;
			color: #0E4A86;
			padding: 0;
			&::after {
				border: none;
			}
		}
	}
</style>
