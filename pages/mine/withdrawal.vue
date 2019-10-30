<template>
	<view class="main-container">
		<view class="bg-block">
			<image class="image" src="../../static/images/withdrawal.jpg" mode="scaleToFill" @click="handleChooseImage"></image>
			<view class="up-block">
				<view class="info">我的余额</view>
				<view class="money">￥{{money}}</view>
				<view class="msg">金额满10元即可提现</view>
			</view>	
		</view>
		
		<view class="item-block">
			<view class="label">请输入提款金额</view>
			<view class="input-block">
				<view class="money-icon">￥</view>
				<input class="input" type="number" :value="money"  @input="onKeyInput" maxlength="20" placeholder="0" placeholder-class="input-placeholder" />
			</view>
		</view>
		<view class="item-block">
			<view class="label">选择提现方式</view>
			<view class="select-block">
				<image class="image" src="../../static/images/wechat-icon.jpg" mode="aspectFit"></image>
				<view class="intro">提现至微信</view>
				<label>
					<checkbox class="checkbox" :value="'wechat'" :checked="true" /><text></text>
				</label>
			</view>
		</view>
		
		
		<view class="input-block btn-save" @click="handleSave">申请提现</view>
		
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			
		},
		
		data() {
			return {
				money:0,
			}
		},
		methods: {
			
			
		}
	}
</script>

<style>
	page,uni-page-wrapper{
		background: #FFFFFF;
	}
	.main-container{
		padding: 20px 10px;
	}
	.bg-block{
		position: relative;
		height: 150px;
	}
	.bg-block .image{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
	.bg-block .up-block{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		margin-bottom: 18px;
		color: #FFFFFF;
		padding: 0 22px;
	}
	.bg-block .up-block .info{
		font-size: 13px;
		margin-bottom: 10px;
	}
	.bg-block .up-block .money{
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 15px;
	}
	.bg-block .up-block .msg{
		font-size: 11px;
	}
	.item-block{
		padding: 10px;
	}
	.item-block .label{
		font-size: 14px;
		font-weight: 600;
		color: #333333;
		margin-bottom: 10px;
	}
	
	.item-block .input-block {
		display: flex;
		flex-direction: row;
		background: #F7F7F7;
		color:#FE4521;
		font-size: 14px;
		font-weight: 500;
		align-items: flex-end;
		padding: 5px 10px;
		border-radius: 10px;
		margin-bottom: 20px;
	}
	
	.item-block .input-block .input {
		flex: 1;
		
		font-size:18px;
		color:#FE4521;
		margin-left: 5px;
	}
	
	.item-block .select-block{
		display: flex;
		flex-direction: row;
		font-size: 16px;
		font-weight: 500;
		align-items: center;
	}
	.item-block .select-block .image{
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	.item-block .select-block .intro{
		flex: 1;
	}
	.item-block .select-block .checkbox{
		/* background: #2D7EF7;
		color: #FFFFFF; */
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
