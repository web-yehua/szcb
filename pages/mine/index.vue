<template>
	<view>
		<view class="mine-block">
			<view class="setting">
				<uni-icons type="gear" size="26" color="#FFFFFF" :style="{'font-weight': 'bold'}"/>
			</view>
			<view class="left-block">
				<image class="image" src="../../static/images/c3.jpg" mode="scaleToFill"></image>
				<view class="name">用户名</view>
			</view>
			<view class="right-block">
				<view class="item-block">
					<image class="image-coin" src="../../static/images/coin.png" mode="scaleToFill"></image>
					<view class="name">账户余额</view>
					<uni-icons type="forward" size="16" color="#FFFFFF" :style="{'font-weight': 'bold'}"/>
				</view>
				<view class="item-block money">
					0
				</view>
			</view>
			<!-- 已开通 -->
			<view class="card-block" v-if="is_open">
				<image class="image" src="../../static/images/vip.png" mode="scaleToFill"></image>
				<view class="info-block">
					<view class="level-name">
							SVIP会员
					</view>
					<view class="exp-time">
						有效期至: 2020-12-12
					</view>
				</view>
				<view class="left-info">
					立即使用
					<uni-icons type="forward" size="16" color="#FFFFFF" :style="{'font-weight': 'bold'}"/>
				</view>
			</view>
			<!-- 立即开通 -->
			<view class="card-block sure-open" v-else>
				<image class="image" src="../../static/images/vip-card.jpg" mode="scaleToFill"></image>
				<view class="info-block">
					开通VIP尊享更多特权
				</view>
				<view class="right-info">
					开通
				</view>
			</view>
		</view>
		
		<view class="grid-blcok">
			<view class="item" v-for="(item,index) in btn_list" :key="index">
				<image class="image" :src="item.img" mode="aspectFit"></image>
				<view class="name">
					{{item.name}}
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
				is_open:false,
				btn_list:[
					{name:'我的爱车','img':'/static/images/mine-car.png',},
					{name:'我的二维码','img':'/static/images/mine-qrcode.png',},
					{name:'我的团队','img':'/static/images/mine-team.png',},
					{name:'常见问题','img':'/static/images/mine-quesion.png',},
					{name:'关于我们','img':'/static/images/mine-about.png',},
					{name:'联系我们','img':'/static/images/mine-tel.png',},
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
	.mine-block{
		background: #2D7EF7;
		height: 160px;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		padding: 0 10px;
		color: #FFFFFF;
	}
	.mine-block .left-block{
		flex: 3;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.mine-block .left-block .image{
		border-radius: 50%;
		border: 1px solid #FFFFFF;
		height: 62px;
		width: 62px;
		margin: 0px 15px 0 5px;
	}
	.mine-block .left-block .name{
		
		font-size: 17px;
		font-weight: 600;
	}
	.mine-block .right-block {
		flex:2;
		display: flex;
		flex-direction: column;
		
	}
	.mine-block .right-block .item-block{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.mine-block .right-block .item-block{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.mine-block .right-block .item-block .image-coin{
		width: 19px;
		height: 19px;
	}
	.mine-block .right-block .item-block .name{
		padding: 0 5px;
		font-size: 13px;
		font-weight: normal;
	}
	.mine-block .right-block .item-block.money{
		font-size: 17px;
		font-weight: 600;
	}
	.mine-block .setting{
		position: absolute;
		top: 5px;
		right: 10px;
	}
	.mine-block .card-block{
		position: absolute;
		margin: 0 10px;
		height: 48px;
		background: #222222;
		bottom: -24px;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		align-items:center;
		justify-content: space-between;
		padding: 0 10px;
		
	}
	.mine-block .card-block .image{
		width: 27px;
		height: 18px;
	}
	.mine-block .card-block .info-block{
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		flex:1;
		font-size: 14px;
		font-weight: 500px;
		color: #E5C282;
	}
	.mine-block .card-block .info-block .exp-time{
		font-size: 9px;
		color: #E5C282;
	}
	.mine-block .card-block .right-info{
		font-size: 11px;
		color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.mine-block .card-block.sure-open {
		background: #FFFFFF;
		
	}
	.mine-block .card-block.sure-open  .info-block{
		color: #222222;
		font-size: 15px;
		font-weight: 600;
	}
	.mine-block .card-block.sure-open .right-info{
		background: #222222;
		color: #FFFFFF;
		padding: 5px 10px;
		
	}
	.grid-blcok{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-radius: 15px;
		background: #FFFFFF;
		margin: 36px 15px 0;
		padding: 25px 10px;
	}
	.grid-blcok .item{
		height: 56px;
		display: flex;
		flex-direction: column;
		justify-content: space-arround;
		align-items: center;
		font-size: 12px;
		color: #666666;
		font-weight: bold;
		padding: 10px 0;
		
	}
	.grid-blcok .item .image{
		width: 30px;
		height: 30px;
		margin-bottom: 14px;
	}
</style>
