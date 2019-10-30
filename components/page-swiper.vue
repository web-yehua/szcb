<!-- 轮播图 -->
<template>
	<view class="uni-padding-wrap">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper"  
				v-bind:style="{  height: height + 'px' }" 
				:indicator-dots="indicatorDots" 
				:autoplay="autoplay" 
				:interval="interval" 
				:duration="duration"
				:indicator-color="indicatorColor"
			>
					<swiper-item class="swiper-item" v-for="(item,index) in list" :key="index">
						
						<image class="swiper-item-image" :src="item.img"></image>
					</swiper-item>
					
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			indicatorDots:{
				type:Boolean,
				default:true
			},
			indicatorColor:{
				type:String,
				default:"rgba(0, 0, 0, .3)"
			},
			autoplay:{
				type:Boolean,
				default:true,
			},
			interval:{
				type:Number,
				default:2000,
			},
			duration:{
				type:Number,
				default:500,
			},
			height:{
				type:Number,
				default:175,
			},
			list:{
				required:true,
				type:Array,
				defalut:[]
			}
		}
	}
</script>

<style lang="scss">
.swiper{
	
	.swiper-item{
		width: 100%;
		height: 100%;
	}
	
	.swiper-item-image{
		height: 100%;
		width: 100%;
	}
}

</style>
