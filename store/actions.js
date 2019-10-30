import req from '../utils/req.js'
export default {
	login_in({commit},{phone,verify}){
		//用户登录
		console.log(verify)
		req('user-login',{
			data:{
				code:verify,
				phone:phone
			},
			handleSuccess:function(data,res){
				getApp().globalData.showToastNoIcon(res.msg)
				console.log(data)
				let user_token = data.user_token;
				let user_token_arr = user_token.split('.');
				let user_id = user_token_arr[0]-0;
				let login_info = {
					user_id : user_id,
					user_token : user_token,
					user_name : data.name,
					user_face : data.face,
					user_type : data.type,
					user_money : data.money,
					user_car_num : data.car_num,
				};
				//登录成功
				commit('initUserData',login_info)
				//保存本地登录信息
				try{
					uni.setStorageSync('store_login_info', login_info);
				}catch(e){
					//TODO handle the exception
				}
				//返回首页
				setTimeout(function(){
					uni.switchTab({url:'/pages/index/index'});
				},500)
			}
		})
	},
	sendVerify(context,{type,phone}){
		//发送验证码
		req('send-verify',{
			data:{
				type:type,
				phone:phone
			}
		})
		
		
	}
}