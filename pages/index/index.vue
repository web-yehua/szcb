<template>
	<view>
		
		<view class="input-view">
			<uni-icons class="uni-icon-my-search" type="search" size="16" color="#a8a8a8" :style="{'font-weight': 'bold'}"/>
			<view class="search-text">快速搜索</view>
		</view>
		<view class="tip-msg" v-if="user_car_num<=0">
			<image class="image" src="../../static/images/blue-car.jpg" mode="aspectFit"></image>
			<view class="text">车库还是空的，添加一辆车吧</view>
			<uni-icons type="forward" color="#327bf6"></uni-icons>
		</view>
		<pageSwiper
			:height=200
			:list="swiper_list"
		/>
		<view class="uni-grid-block" >
			<navigator  open-type="switchTab" :url="'/pages/cate/index?cid='+item.id" class="item-block" v-for="(item,index) in grid_list" :key="index">
				<image class="image" :src="item.img" mode="aspectFit" />
				<text class="text">{{item.name}}</text>
			</navigator>
			<navigator  open-type="switchTab" url="/pages/cate/index?type=1" class="item-block">
				<image class="image" src="/static/images/c8.jpg" mode="aspectFit" />
				<text class="text">全部</text>
			</navigator>
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
		
		<goodsThirdBlock
			show-left-img="new"
			tip-text="新品推荐"
			sub-text="体验前沿科技"
			:items="new_goods_list"
		/>
		
		<goodsGridBlock
			show-left-img="hot"
			tip-text="热销单品"
			:items="hot_goods_list"
		/>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	
	import pageSwiper from '../../components/page-swiper.vue'
	import goodsGridBlock from '../../components/goods-grid-block.vue'
	import goodsThirdBlock from '../../components/goods-third-block.vue'
	
	import {  mapState } from "vuex";
	
	export default {
		components:{
			uniIcons,
			uniNavBar,
			pageSwiper,
			goodsGridBlock,
			goodsThirdBlock,
		},
		mounted(){
			var _that = this;
			//请求数据
			this.$req('index-data',{
				handleSuccess(data,res){
					let {follow_img,goods_cate,new_goods_list,new_hot_list} = data;
					//轮播图
					_that.swiper_list = follow_img||[];
					//分类
					_that.grid_list = goods_cate||[];
					//商品列表-新品
					_that.new_goods_list = new_goods_list||[];
					//商品列表-热门
					_that.new_goods_list = new_goods_list||[];
					
				}
			})
		},
		computed:{
			...mapState(['user_id','user_type','user_car_num'])
		},
		data() {
			return {
				swiper_list:[
					
				],
				grid_list:[
					
				],
				new_goods_list:[],
				hot_goods_list:[],
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
