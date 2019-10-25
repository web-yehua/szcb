<template>
	<view class="uni-page-head">
		<!-- 左侧 -->
		
		<view class="item left"><slot name="left">{{left}}</slot></view>
		
		
		<view class="item center"><slot>Submit</slot></view>
		<!-- 右侧 -->
		<view class="item right"><slot  name="right">{{right}}</slot></view>
		
		
	</view>
</template>

<script>
	export default{
		name:"page-head",
		props:{
			title:{
				type: String,
				default: "首页"
			},
			left:{
				type: String,
				default: ""
			},
			right:{
				type: String,
				default: ""
			},
		}
	}
</script>

<style>
	.uni-page-head {
	      height: calc(var(--status-bar-height) + 50px);
	      width: 100%;
		  display: flex;
		  flex-direction: row;
		  background: #965a0c;
		  color:white;
		  justify-content: center;
		  align-items: center;
	}
	.uni-page-head .item {
		flex:1;
	    text-align:center;
	}
	.uni-page-head .left {
	    flex:1;
	}
	.uni-page-head .center {
	    flex:4;
	}
	  
	.uni-page-head .right {
	    flex:1;
	}
	  
</style>
