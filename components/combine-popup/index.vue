<template>
	<view class="g-combine-popup">
		<view class="g-combine-popup__trigger" @click="openDialog">
			<slot name="trigger"></slot>
		</view>
		<uni-popup
			ref="popup"
			:type="type"
			:animation="animation"
			:maskClick="maskClick"
			:backgroundColor="backgroundColor"
			:safeArea="safeArea"
		>
			<slot></slot>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: 'GCombinePopup',
		props: {
			animation: {
				type: Boolean,
				default: true,
			},
			type: {
				type: String,
				default: 'center',
			},
			maskClick: {
				type: Boolean,
				default: true,
			},
			backgroundColor: {
				type: String,
				default: 'none',
			},
			safeArea: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				visible: false
			}
		},
		methods: {
			openDialog () {
				this.$refs.popup.open();
			},
      closeDialog () {
        this.$refs.popup.close();
      }
		}
	}
</script>

<style>
</style>
