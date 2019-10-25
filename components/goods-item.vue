<template>
	<view class="item-block">
		<image class="image" src="/static/images/my-swiper.jpg" mode="scaleToFill"></image>
		<view class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</view>
		<view class="info">
			<view class="price">登录后查看</view>
			<view class="num">00000人购买</view>
		</view>
	</view>
</template>

<script >
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.item-block{
		width: 100%;
		height: 320px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		font-size: 16px;
	}
	.item-block .image{
		width: 100%;
		height: 220px;
	}
	.item-block .name{
		margin: 10px 0;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;//设置
	}
	.item-block .info{
		padding: 0 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 15px;
	}
	.item-block .info .price{
		color:#2d7ef7;
	}
	.item-block .info .num{
		color:#B6B6B6;
		font-size: 13px;
		align-self: flex-end;
	}
</style>
