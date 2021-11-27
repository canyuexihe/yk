<template>
	<view class="custom-step">
		<block v-for="(item,index) in stepList" :key="index" >
			<view class="custom-step-item">
				<view :class="['line', item.status ]"></view>
				<view :class="['block', item.status]">{{ item.name }}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
    name: 'GCustomStep',
		props: {
			stepList: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="less">
	.custom-step {
		width:100%;
		display: flex;
		flex-wrap: wrap;
		.custom-step-item {
			width: 16.67%;
			position: relative;
			&:nth-of-type(1) {
				.line {
					display: none;
				}
			}
		}
		.line {
			width: 100%;
			height: 1px;
			background: #999;
			position: absolute;
			top: 16px;
			&.finish,
			&.active{
				background: #0E4A86;
			}
		}
		.block {
			width: 32px;
			height: 32px;
			background: #fff;
			border-radius: 4px;
			color: #999;
			border: solid 1px #999;
			text-align: center;
			font-size: 8px;
			padding: 0 5px;
			z-index: 100;
			position: absolute;
			right: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			&.finish {
				color: #0E4A86;
				border: solid 1px #0E4A86;
			}
			&.active {
				color: #0E4A86;
				border: dashed 1px #0E4A86;
			}
			&::before {
				content: '';
				
			}
		}
	}
</style>
