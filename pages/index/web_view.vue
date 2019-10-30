<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option)
			this.src=option.src;
			uni.setNavigationBarTitle({
			    title: option.name
			});
		},
		data() {
			return {
				src:'',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
