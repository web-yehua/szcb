<template>
	<view class="main-container">
		<view class="page-tip"  v-if="hide_page_tip">
			<view class="content">
				{{msg}}
			</view>
			<uniIcons @click="handleClose" type="closeempty" color="#F18425" font-size="11"></uniIcons>
		</view>
		<view class="item-block">
			<view class="label">
				<view class="dot">
					*
				</view> 
				<view class="name">
					车牌号
				</view>
			</view>
			<view class="item-input unit-input">
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===0"  @input="handleUnitInput($event,1)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===1"  @input="handleUnitInput($event,2)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===2"  @input="handleUnitInput($event,3)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===3"  @input="handleUnitInput($event,4)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===4"  @input="handleUnitInput($event,5)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===5"  @input="handleUnitInput($event,6)"/>
				<input class="input" type="text" maxlength="1" value="" :focus="current_index===6"  @input="handleUnitInput($event,7)"/>
			</view>
		</view>
		
		<view class="item-block" v-for="(item,index) in list" :key="index">
			<view class="label">
				<view class="dot">
					*
				</view> 
				<view class="name">
					{{item.name}}
				</view>
			</view>
			<view class="item-input">
				<input class="input" type="text" value="" />
			</view>
		</view>
		
		<view class="input-block btn-save" @click="handleSave">保存</view>
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
				hide_page_tip:true,
				current_index:0,
				msg:'录入完整的汽车和里程信息,享受更精准的服务',
				list:[
					{name:"请输入您品牌+车型",type:'text',value:""},
					{name:"请输入您车架号",type:'text',value:""},
					{name:"请输入您发动机",type:'text',value:""},
				],
			}
		},
		methods: {
			handleUnitInput(e,index){
				let value = e.detail.value;
				if(value){
					this.current_index=index
				}else{
					this.current_index= index-2
				}
				console.log(this.current_index)
			},
			handleClose(){
				this.hide_page_tip=false;
			}
		}
	}
</script>

<style>
	.page-tip{
		display: flex;
		flex-direction: row;
		padding: 10px;
		justify-content: space-between;
		font-size: 11px;
		background: #F4EFD1;
		color: #F18425;
	}
	.item-block{
		display: flex;
		flex-direction: column;
		padding: 10px;
		font-size: 15px;
		color: #333333;
	}
	.item-block .label{
		display: flex;
		flex-direction: row;
	}
	.item-block .label .dot{
		color: #FF0000;
		margin-right: 5px;
	}
	.item-block .label .name{
		font-weight: bold;
	}
	
	.item-block .item-input{
		color: #666666;
		font-size: 12px;
		margin-top: 5px;
	}
	.item-block .item-input.unit-input{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	}
	.item-block .item-input.unit-input .input{
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		color: #333333;
	}
	.item-block .item-input .input{
		border: 1px solid #CCCCCC;
		padding: 10px;
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
