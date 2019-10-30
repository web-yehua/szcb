<template>
	<view class="verify-block">
		<button class="btn" type="button" :disabled="btn_disabled" @click="handleSend">{{notice}}</button>
	</view>
</template>

<script>
	export default{
		props:{
			phone:{
				type:[Number,String]
			},
			type:{
				type:Number,
				default:0,
			}
		},
		data() {
			return {
				notice:'发送验证码',
				btn_disabled:false,
			};
		},
		methods:{
			handleSend(){
				console.log(this.phone)
				if(!this.phone || this.phone.length!==11){
					uni.showToast({title:'请输入正确的手机号码',icon:"none"})
					return false;
				}
				//发送验证码
				this.$store.dispatch('sendVerify',{type:this.type,phone:this.phone})
				
				let second=60;//倒计时时间
				this.btn_disabled = true;
				var that = this;
				var interval_index = setInterval(function(){
					second--;
					that.notice = '倒计时('+second+')';
					if(second<=0){
						that.notice = '发送验证码',
						that.btn_disabled = false,
						clearInterval(interval_index)
					}
				},1000);
			}
		}
		
	}
</script>

<style>
	.verify-block .btn{
		background: #2D7EF7;
		color: #FFFFFF;
		font-size: 13px;
	}
	.verify-block .btn:after{
		color: #FFFFFF;
		border:unset;
	}
</style>
