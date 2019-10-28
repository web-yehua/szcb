<template>
	<view class="main-block">
		<view class="input-view">
			<view class="input-view">
				<uni-icons class="uni-icon-my-search" type="search" size="16" color="#a8a8a8" :style="{'font-weight': 'bold'}"/>
				<view class="search-text">搜索</view>
			</view>
		</view>
		
		<view class="content">
			<view class="left-block">
				<view class="item" :class="{'active':key==current_index}" v-for="(item,key) in item_list" :key="key" @click="item_click(item,key)">
					{{item.name}}
				</view>
			</view>
			<view class="right-block">
				<image class="tip-image" :src="show_image" mode="scaleToFill"></image>
				<view class="tip-title">{{show_name}}</view>
				<view class="item-block">
					<view class="item" v-for="(item,index) in show_list" :key="index">
						<image class="image" :src="item.img" mode="scaleToFill"></image>
						<view class="name">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	export default{
		components:{
			uniIcons,
		},
		data(){
			return {
				current_index:0,
				item_list:[
					{name:'润滑油',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油汽机油汽机油汽机油汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'滤清器',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'美容清洗',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'养护用品',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'照明系统',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'工具/仪器',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
					{name:'车身构件',img:'/static/images/my-swiper.jpg',list:[
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
						{name:'汽机油','img':'/static/images/c6.jpg'},
					]},
				]
			}
		},
		computed:{
			show_image(){
				return this.item_list[this.current_index].img
			},
			show_name(){
				return this.item_list[this.current_index].name
			},
			show_list(){
				return this.item_list[this.current_index].list
			}
		},
		methods: {
			item_click(item,key) {
				console.log(item)
				this.current_index = key
			}
		},
	}
</script>

<style>
	page,uni-page-wrapper,.main-block{
		background: #F5F5F5;
		height: 100%;
	}
	.input-view {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
		height: 40px;
		margin: 10px 10px ;
		padding:0 15px;
		color:#5c5c5c;
	}
	.input-view .search-text{
		display: inline;
		font-size: 15px;
		margin-left: 8px;
	}
	
	.content{
		display: flex;
		flex-direction: row;
		height: 100%;
		color:#333333;
		font-size: 14px;
		font-weight: 600;
	}
	.content .left-block{
		width: 80px;
		height: 100%;
	}
	.content .left-block .item{
		padding: 10px 0;
		text-align: center;
	}
	.content .left-block .item.active{
		background: #FFFFFF;
		color: #2D7EF7;
	}
	.content .left-block .item.active:before{
		content: '|';
		color: #2D7EF7;
		font-size: 18px;
		line-height: 18px;
		float: left;
		margin-top: -1px;
	}
	.content .right-block{
		flex: 1;
		background: #FFFFFF;
		height: 100%;
		padding: 10px 15px;
	}
	.content .right-block .tip-image{
		width: 100%;
		height: 100px;
	}
	.content .right-block .tip-title{
		padding: 5px 0;
		border-bottom: 1px solid #F5F5F5;
		color:#0c0c0c;
	}
	.content .right-block .item-block{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.content .right-block .item-block .item{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 13px;
		color: #666666;
		padding: 10px 0;
	}
	
	.content .right-block .item-block .item .image{
		width: 80px;
		height: 80px;
		
	}
	.content .right-block .item-block .item .name{
		padding-top: 5px;
		display: -webkit-box;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;//设置
	}
	
</style>
