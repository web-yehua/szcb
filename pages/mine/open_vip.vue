<template>
	<view class="main-container">
		<view class="item-block">
			<checkbox-group @change="checkboxChange">
				<view class="item" :style="{'color':item.color}" v-for="(item,index) in pay_list" :key="index">
					<image class="image" :src="item.img" mode="aspectFill"></image>
					<view class="name">{{item.name}}</view>
					<view class="price">{{item.price+'  '+item.unit}}</view>
					<label class="checkbox-label">
						<checkbox :value="''+item.type" :checked="current_index===item.type" />
					</label>
				</view>
			</checkbox-group>
		</view>
		<view class="item-pay-block">
			<view class="label">选择提现方式</view>
			<view class="select-block">
				<image class="image" src="../../static/images/wechat-icon.jpg" mode="aspectFit"></image>
				<view class="intro">提现至微信</view>
				<label>
					<checkbox class="checkbox" :value="'wechat'" :checked="true" /><text></text>
				</label>
			</view>
		</view>
		
		<view class="input-block btn-save" @click="handleSave">确认开通</view>
		
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
				current_index:1,
				pay_list:[
					{type:0,name:"VIP会员",color:"#9D9B94",price:'480',unit:'/年',img:'/static/images/vip-g.jpg',intro:'邀请好友购买会员邀请好友购买会员',},
					{type:1,name:"高级VIP会员",color:"#C4A164",price:'680',unit:'/年',img:'/static/images/vip.png',intro:'邀请好友购买会员邀请好友购买会员',},
				]
			}
		},
		methods: {
			checkboxChange: function (e) {
				console.log(e)
				var items = this.items,
					values = e.detail.value;
				
				
			}
			
		}
	}
</script>

<style>
	.main-container{
		padding: 44px 10px;
	}
	.item-block .item{
		display: flex;
		flex-direction: row;
		align-items: center;
		
		padding: 15px 0;
		font-size: 14px;
		color:#9D9B94;
	}
	.item-block .item .image{
		width: 33px;
		height: 30px;
		margin-right: 10px;
	}
	
	.item-block .label,.item-pay-block .label{
		font-size: 14px;
		font-weight: 600;
		color: #333333;
		margin-bottom: 10px;
	}
	
	.item-block .item .checkbox-label{
		flex: 1;
		text-align: right;
	}
	
	.item-pay-block {
		margin-top: 20px;
		
	}
	.item-pay-block .select-block{
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		font-size: 16px;
		font-weight: 500;
		align-items: center;
	}
	.item-pay-block .select-block .image{
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	.item-pay-block .select-block .intro{
		flex: 1;
	}
	
	.btn-save{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 30px;
		padding: 15px 0;
		margin: 0 15px;
		font-size: 15px;
		font-weight: 600;
		background: #2D7EF7;
		color: #FFFFFF;
		text-align: center;
		border-radius: 25px;
	}
	
</style>
