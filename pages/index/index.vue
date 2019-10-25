<template>
	<view>
		
		<view class="input-view">
			<uni-icons class="uni-icon-my-search" type="search" size="16" color="#a8a8a8" :style="{'font-weight': 'bold'}"/>
			<view class="search-text">快速搜索</view>
		</view>
		<view class="tip-msg">
			<image class="image" src="../../static/images/blue-car.jpg" mode="aspectFit"></image>
			<view class="text">车库还是空的，添加一辆车吧 </view>
			<uni-icons type="forward" color="#327bf6"></uni-icons>
		</view>
		<pageSwiper
			:height=200
			:list="swiper_list"
		/>
		<view class="uni-grid-block" >
			<view class="item-block" v-for="(item,index) in grid_list" :key="index">
				<image class="image" :src="item.img" mode="aspectFit" />
				<text class="text">{{item.name}}</text>
			</view>
		</view>
		<view class="join-member-block">
			<view class="join-member-block-postion">
				<image class="image" src="../../static/images/join-menber.jpg" mode="scaleToFill"></image>
				<view class="float-block">
					<view class="text">购买会员 享受最低价格</view>
					<view class="btn">成为会员</view>
				</view>
			</view>
			
		</view>
		
		<goodsGridBlock
			show-left-img="new"
			tip-text="新品推荐"
			sub-text="体验前沿科技"
		/>
		
		<goodsGridBlock
			show-left-img="hot"
			tip-text="热销单品"
		/>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	
	import pageSwiper from '../../components/page-swiper.vue'
	import goodsGridBlock from '../../components/goods-grid-block.vue'
	export default {
		components:{
			uniIcons,
			uniNavBar,
			pageSwiper,
			goodsGridBlock,
		},
		data() {
			return {
				swiper_list:[
					{"src":"/static/images/my-swiper.jpg"},
					{"src":"/static/images/my-swiper.jpg"},
					{"src":"/static/images/my-swiper.jpg"}
				],
				grid_list:[
					{"name":"油品","img":"/static/images/c1.jpg"},
					{"name":"加装","img":"/static/images/c2.jpg"},
					{"name":"机滤","img":"/static/images/c3.jpg"},
					{"name":"火花塞","img":"/static/images/c4.jpg"},
					{"name":"变速箱","img":"/static/images/c5.jpg"},
					{"name":"轮胎","img":"/static/images/c6.jpg"},
					{"name":"比价","img":"/static/images/c7.jpg"},
					{"name":"全部","img":"/static/images/c8.jpg"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

	.input-view {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: #efefef;
		height: 40px;
		border-radius: 15px;
		margin: 10px 10px ;
		padding:0 15px;
		color:#5c5c5c;
	}
	.input-view .search-text{
		display: inline;
		font-size: 15px;
		margin-left: 8px;
	}
	.tip-msg{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 15px 10px;
		font-size: 16px;
		color: #2d7ef7;
	}
	.tip-msg .image{
		width: 20px;
		height: 15px;
		margin-right: 9px;
	}
	.tip-msg .image{
		font-weight: bold;
	}
	
	.uni-grid-block{
		display: grid;
		grid-template-columns:1fr 1fr 1fr 1fr;
		margin-top: 15px;
	}
	.uni-grid-block .item-block{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 5px;
	}
	.uni-grid-block .item-block .image{
		width: 48px;
		height: 52px;
	}
	.uni-grid-block .item-block .text{
		font-size: 16px;
		color:#5c5c5c;
	}
	
	.join-member-block{
		padding: 15px;
		border-bottom: 12px solid #f6f6f6;
		
	}
	.join-member-block .join-member-block-postion{
		position: relative;
		height: 60px;
	}
	.join-member-block .join-member-block-postion .image{
		height: 100%;
		width: 100%;
		position: absolute;
	}
	.join-member-block .join-member-block-postion .float-block{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color:#5c5c5c;
		font-weight: bold;
		font-size: 16px;
	}
	.join-member-block .join-member-block-postion .float-block .text{
		flex: 1;
		margin-left: 60px;
	}
	
	.join-member-block .join-member-block-postion .float-block .btn{
		padding: 10px 5px;
		background: #FFFFFF;
		color:#2d7ef7;
		border-radius: 10px;
		margin: 0 10px 0 10px;
	}
	
</style>
