<template>
	<view v-if="!isCustomSize" 
  :class="['sigin-block', type, size]"
  @click="clickEvent"><slot></slot></view>
  <view v-else 
    :class="['sigin-block', type]" 
    :style="{'width': `${customSize[0]}px`, 
    'height': `${customSize[1]}px`,
    'fontSize': `${customSize[2]}px`,
    'lineHeight': `${customSize[1]}px`,
    'padding':0}"
    @click="clickEvent"><slot></slot></view>
</template>

<script>
	export default {
    name: 'GSignBlock',
		props: {
			type: {
				type: String,
				default:'default'
			},
			size: {
				type: String,
				default:''
			},
      isCustomSize: {
        type: Boolean,
        default:false
      },
      customSize: {
        type: Array,
        default: [10, 10]
      }
		},
    methods: {
      clickEvent () {
        this.$emit('click')
      }
    }
	}
</script>

<style lang="less">
	.sigin-block {
		position: relative;
		width: 32px;
		height: 32px;
		background: #fff;
		border-radius: 4px;
		color: #0E4A86;
		border: solid 1px #0E4A86;
		font-size: 8px;
		text-align: center;
		padding: 5px;
		
		&.primary {
			color: #fff;
			background: #0E4A86;
			border: none;
		}
		&.large {
			width: 36px;
			height: 36px;
			font-size: 10px;
			padding: 3px 4px;
			line-height: 14px;
			font-weight: 400;
			 &::after {
				content: "";
				position: absolute;
				left: -1px;
				top: -1px;
				width: 40px;
				height: 40px;
				background: #EBEBED;
				z-index: -1;
				border-radius: 4px;
			 }
		}
	}
</style>
