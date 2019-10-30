<template>
	<view class="item-block">
		<view class="item" v-for="(item,index) in list" :key="{index}">
			<view class="info">
				<view class="intro">{{item.intro}}</view>
				<view class="date">{{item.date}}</view>
			</view>
			<view class="money">{{item.status_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			
		},
		computed: {
			
		},
		data() {
			return {
				list:[
					{id:0,status_name:'进行中',intro:'邀请好友购买会员邀请好友购买会员',date:'2019-10-29 18:00:00',},
					{id:0,status_name:'已提现',intro:'邀请好友购买会员邀请好友购买会员',date:'2019-10-29 18:00:00',},
				]
			}
		},
		methods: {
			
			
		}
	}
</script>

<style>
	.item-block{
		background: #FFFFFF;
	}
	.item-block .item{
		padding: 5px 10px;
		border-top: 10px solid #F5F5F5;
		display: flex;
		flex-direction: row;
	}
	.item-block .item .info{
		flex: 1;
		padding: 10px 0;
	}
	.item-block .item .info .intro{
		flex: 1;
		margin-bottom: 5px;
		font-size: 13px;
		color: #333333;
		font-weight: 600;
		
	}
	.item-block .item .info .date{
		flex: 1;
		font-size: 11px;
		color: #666666;
	}
	.item-block .item .money{
		width: 50px;
		color: #2D7EF7;
		font-size: 14px;
		align-items: center;
		margin: auto;
	}
	
	
</style>
