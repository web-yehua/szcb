<template>
	<view class="tip-gooos-block">
		<view class="tip-block">
			<image v-if="showLeftImg.length" class="image" :src="'/static/images/'+showLeftImg+'.jpg'" mode="scaleToFill"></image>
			<view class="tip-content-block">
				<view class="tip-text">{{tipText}}</view>
				<view class="sub-text" v-if="subText.length">{{subText}}</view>
			</view>
			<uni-icons type="forward" color="#327bf6"></uni-icons>
		</view>
		<view class="goods-grid-block">
			<view class="item-img left-image" v-for="(item,index) in items" :key="index">
				<image class=" image" :src="item.img" mode="scaleToFill"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniIcons from './uni-icons/uni-icons.vue'
	import goodsItem from './goods-item.vue'
	export default {
		components:{
			uniIcons,
			goodsItem,
		},
		props:{
			showLeftImg:{
				type:String,
				default:''
			},
			tipText:{
				type:String,
				default:''
			},
			subText:{
				type:String,
				default:''
			},
			items:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.tip-gooos-block{
		display: flex;
		flex-direction: column;
		padding: 15px 10px;
		font-size: 16px;
		border-bottom: 14px solid #f6f6f6;
	}
	.tip-gooos-block .tip-block{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0px;
	}
	.tip-gooos-block .tip-block .image{
		width: 30px;
		height: 18px;
		margin-right: 10px;
	}
	.tip-gooos-block .tip-block .tip-content-block{
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		font-weight: bold;
	}
	.tip-gooos-block .tip-block .tip-content-block .tip-text{
		font-size: 20px;
		color: #f18425;
		margin-right: 10px;
		align-self: flex-end;
	}
	.tip-gooos-block .tip-block .tip-content-block .sub-text{
		font-size: 16px;
		color: #b6b6b6;
		align-self: flex-end;
	}
	.tip-gooos-block .goods-grid-block{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
	}
	.tip-gooos-block .goods-grid-block .item-img{
		width: 100%;
		height: 95px;
	}
	.tip-gooos-block .goods-grid-block .item-img .image{
		width: 100%;
		height: 100%;
	}
	.tip-gooos-block .goods-grid-block .left-image{
		height: 100%;
		grid-column: 1 / span 1;
		grid-row: 1 / span 2;
	}
	
</style>
