<template>
	<view class="main-container">
		<image class="icon-image" src="/static/images/car-login.jpg" mode="aspectFit"></image>
		<view class="item-block">
			<image class="image" src="../../static/images/phone.jpg" mode="aspectFit"></image>
			<input class="input"  type="number" v-model="phone" :value="phone" placeholder="请输入手机号码" placeholder-style="color:#FFFFFF" maxlength="11"/>
		</view>
		<view class="item-block">
			<image class="image" src="../../static/images/secure.jpg" mode="aspectFit"></image>
			<input class="input" type="number" v-model="verify" :value="verify" placeholder="请输入验证码" placeholder-style="color:#FFFFFF" maxlength="6"/>
			
			<send-verify
				class="login-verify"
				:phone="phone"
			/>
		</view>
		
		<view class="btn" @click="handleLogin"> 登 录 </view>
		<navigator class="back" url="index" open-type="switchTab">返回首页</navigator>
	</view>
</template>

<script>
	import uniIcons from '../../components/uni-icons/uni-icons.vue'
	import sendVerify from '../../components/send-verify.vue'
	
	export default {
		components:{
			uniIcons,
			sendVerify,
		},
		data() {
			return {
				phone:'',
				verify:''
			}
		},
		methods: {
			handleLogin(){
				this.$store.dispatch('login_in',{phone:this.phone,verify:this.verify})
				// this.$store.commit('initUserData','123123213')
			}
		}
	}
</script>

<style>
	page,uni-page-wrapper{
		background: #2D7EF7;
	}
	.main-container{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 160px 30px 0;
	}
	.main-container .icon-image{
		width: 140px;
		height: 60px;
		margin-bottom: 60px;
	}
	.main-container .item-block{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		color:#FFFFFF;
		border-bottom: 1px solid #FFFFFF;
		font-size: 13px;
	}
	.main-container .item-block .image{
		width: 16px;
		height: 25px;
		padding-right: 10px;
	}
	.main-container .item-block .input{
		flex: 1;
	}
	
	.btn{
		width: 100%;
		margin-top: 30px;
		margin-bottom: 15px;
		padding: 15px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		color: #2D7EF7;
		background: #FFFFFF;
		border-radius: 20px;
	}
	.back{
		font-size: 14px;
		color: #FFFFFF;
		align-self: flex-end;
	}
</style>
