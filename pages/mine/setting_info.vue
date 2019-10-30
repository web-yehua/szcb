<template>
	<view>
		<view class="user-face">
			<image class="image" src="../../static/images/c2.jpg" mode="scaleToFill" @click="handleChooseImage"></image>
			<view class="tip">点击更换头像</view>
		</view>
		
		<view class="input-block">
			<view class="label">昵称</view>
			<input class="input" type="text" :value="user_name"  @input="onKeyInput" maxlength="20" placeholder="请输入您的姓名" placeholder-class="input-placeholder" />
		</view>
		<view class="input-block">
			<view class="label">生日</view>
			<picker mode="date" :value="birth_day"  :start="startDate" :end="endDate" @change="bindTimeChange">
				<view class="uni-input">{{birth_day}}</view>
			</picker>
		</view>
		<view class="input-block">
			<view class="label">手机</view>
			<input class="input" type="text" value="" :disabled=true maxlength="11" placeholder-class="input-placeholder"/>
		</view>
		
		<view class="input-block btn-save" @click="handleSave">保存</view>
		
	</view>
</template>

<script>
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		data() {
			return {
				user_name:"",
				phone:'',
				birth_day:'2019-10-29'
			}
		},
		methods: {
			handleChooseImage:function(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(res);
				    }
				});
			},
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			bindTimeChange: function(e) {
				this.birth_day = e.target.birth_day
			},
			handleSave:function(){
				//保存
				uni.switchTab({ url: '/pages/mine/index' });
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper{
		background: #FFFFFF;
	}
	
	.user-face{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 250px;
		font-size: 13px;
		font-weight: 600;
		color: #303030;
	}
	.user-face .image{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 10px;
	}
	
	.input-block{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 20px;
		padding: 10px;
		color:#333333;
		font-size: 15px;
		font-weight: 600;
		border-radius: 10px;
		border: 1px solid #f5f5f5;
		margin-bottom: 10px;
	}
	.input-block .label{
		width: 40px;
		
	}
	.input-block .input{
		flex: 1;
		
	}
	.input-block .input-placeholder{
		color:#666666;
		font-size: 15px;
		font-weight: 600;
		
	}
	.input-block.btn-save{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 15px;
		padding: 15px 0;
		font-size: 15px;
		font-weight: 600;
		background: #2D7EF7;
		color: #FFFFFF;
		align-items: center;
		justify-content: center;
	}
	
</style>
