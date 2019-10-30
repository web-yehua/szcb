<template>
	<view class="main-container">
		<view class="item-block-nothing" v-if="!list.length">
			<image class="nothing-image" src="../../static/images/min-car-i.jpg" mode="aspectFit"></image>
			<view class="nothing-tip">
				还没有爱车资料哦,快去添加吧~
			</view>
		</view>
		<scroll-view class="item-block" scroll-y="true" v-else>
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="name">{{item.name}}</view>
				<view class="brand">{{item.brand}}</view>
				<view class="number">{{item.number}}</view>
				<view class="card">{{item.card}}</view>
				<view class="footer">
					<view class="block" v-if="item.is_default">
						<image class="image" src="../../static/images/fit-up.jpg" mode="aspectFit"></image>
						默认车辆
					</view>
					<view class="block" v-else>
						<image class="image" src="../../static/images/fit-up-i.jpg" mode="aspectFit"></image>
						设为默认车辆
					</view>
					<view class="block">
						<image class="image" src="../../static/images/del.jpg" mode="aspectFit"></image>
						删除
					</view>
				</view>
			</view>
		</scroll-view>
		
		<navigator url="car_add" class="btn-bottom">
			+ 添加爱车
		</navigator>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue';
	
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			
		},
		components:{
			uniIcons,
		},
		data() {
			return {
				list:[
					// {id:1,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:1},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
					// {id:2,name:'xxxxxxxxxxname',brand:'xxxxxxbrand',number:'xxxnumber',card:'cardxxxxxx',is_default:0},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page,uni-page-wrapper,.main-container{
		background: #F5F5F5;
		height: 100%;
	}
	.main-container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.main-container .item-block{
		flex: 1;
		overflow: auto;
	}
	
	.main-container .item-block-nothing{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main-container .item-block-nothing .nothing-image{
		
		width: 120px;
		height: 90px;
	}
	.main-container .item-block-nothing .nothing-tip{
		font-size: 14px;
		color: #666666;
		text-align: center;
	}
	
	.main-container .item-block .item{
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		font-size: 16px;
		padding: 10px;
		margin-bottom: 10px;
	}
	.main-container .item-block .item .name{
	}
	.main-container .item-block .item .brand{
		font-size: 14px;
	}
	.main-container .item-block .item .footer{
		border-top: 1px solid #F5F5F5;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
		padding: 10px;
		color:#C0C0C0;
	}
	.main-container .item-block .item .footer .image{
		width: 15px;
		height: 15px;
		margin-right: 5px;
	}
	.main-container .btn-bottom{
		padding: 18px 0;
		text-align: center;
		font-size: 15px;
		background: #2D7EF7;
		font-size: 16px;
		color: #FFFFFF;
	}
	
	
</style>
