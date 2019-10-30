<template>
	<view>
		<view class="top-block">
			<image class="bg-img" src="/static/images/money-bg.png" mode="aspectFit"></image>
			<view class="money-info">
				<view class="info-block">
					<view class="icon-block">
						<image class="image" src="../../static/images/coin.png" mode="aspectFit"></image>
						<view class="name"> 当前余额 </view>
					</view>
					<view class="money">
						{{money}}
					</view>
				</view>
				
			</view>
			<navigator url="withdrawal" class="money-btn">提现</navigator>
		</view>
		
		<view class="content">
			<view class="tip-bolck">
				<view class="left-block">
					<view class="my-tip">*</view>
					<view class="name">金额满10元即可提现</view>
				</view>
				
				<view class="right-block">
					<view class="name">提现记录</view>
					<uni-icons type="forward" color="#666666"></uni-icons>
				</view>
				
			</view>
			<view class="item-block">
				<view class="item" v-for="(item,index) in list" :key="{index}">
					<view class="info">
						<view class="intro">{{item.intro}}</view>
						<view class="date">{{item.date}}</view>
					</view>
					<view class="money">{{item.money}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	export default {
		components:{
			uniIcons,
		},
		data() {
			return {
				money:0,
				list:[
					{id:0,money:99,intro:'邀请好友购买会员邀请好友购买会员',date:'2019-10-29 18:00:00',},
					{id:1,money:99,intro:'邀请好友购买会员',date:'2019-10-29 18:00:00',},
					{id:2,money:99,intro:'邀请好友购买会员',date:'2019-10-29 18:00:00',},
					{id:3,money:99,intro:'邀请好友购买会员',date:'2019-10-29 18:00:00',},
					{id:4,money:99,intro:'邀请好友购买会员',date:'2019-10-29 18:00:00',},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page,uni-page-wrapper{
		background: #F5F5F5;
		height: 100%;
	}
	.top-block{
		width: 100%;
		height: 155px;
		margin-bottom: 12px;
		position: relative;
		font-size: 15px;
		color: #FFFFFF;
	}
	.top-block .bg-img{
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		
	}
	.top-block .money-info{
		position: absolute;
		top:0;
		left:0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-block .money-btn{
		position: absolute;
		bottom: 30px;
		right: 30px;
		padding: 5px 10px;
		border-radius: 10px;
		border:1px solid #FFFFFF;
		font-size: 14px;
	}
	.top-block .money-info .info-block{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top-block .money-info .info-block .icon-block{
		display: flex;
		flex-direction: row;
		
	}
	.top-block .money-info .info-block .icon-block .image{
		width: 19px;
		height: 19px;
		margin-right: 10px;
	}
	.top-block .money-info .info-block .money{
		font-size: 40px;
		font-weight: 600;
	}
	.content{
		margin: 15px ;
		font-size: 11px;
		color: #666666;
	}
	.content .tip-bolck{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.content .tip-bolck .left-block{
		display: flex;
		flex-direction: row;
	}
	.content .tip-bolck .left-block .my-tip{
		color: #FF0000;
		margin-right: 3px;
	}
	
	.content .tip-bolck .right-block{
		display: flex;
		flex-direction: row;
		font-size: 13px;
		font-weight: 300;
	}
	.content .item-block{
		margin-top: 10px;
		background: #FFFFFF;
		padding: 10px;
		border-radius: 10px;
	}
	.content .item-block .item{
		padding-bottom: 10px;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		flex-direction: row;
	}
	.content .item-block .item .info{
		flex: 1;
		padding: 10px 0;
	}
	.content .item-block .item .info .intro{
		flex: 1;
		margin-bottom: 5px;
		font-size: 13px;
		color: #333333;
		font-weight: 600;
		
	}
	.content .item-block .item .info .date{
		flex: 1;
		font-size: 11px;
		color: #666666;
	}
	.content .item-block .item .money{
		width: 30px;
		color: #2D7EF7;
		font-size: 14px;
		align-items: center;
		margin: auto;
	}
</style>
