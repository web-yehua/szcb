<script>
	import {showToastNoIcon} from "./utils/util.js";
	export default {
		globalData: {
			showToastNoIcon: showToastNoIcon, 
			token:""
		},  
		onLaunch: function() {
			console.log('App Launch')
			
			//恢复用户登录信息
			try {
			    const store_login_info = uni.getStorageSync('store_login_info');
			    if (store_login_info) {
			        this.$store.commit('initUserData',store_login_info)
			    }
			} catch (e) {
			    // error
			}
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/common/css/fonts/iconfont.css";
	
	/*checkbox 选项框大小  */
	.uni-checkbox-input{  border-radius: 50% !important;;width: 40rpx !important; height: 40rpx !important; }
	/*checkbox选中后样式  */
	.uni-checkbox-input.uni-checkbox-input-checked{ border-radius: 50%;background: #3D7EFF; border-color:#3D7EFF; }
	/*checkbox选中后图标样式  */
	.uni-checkbox-input.uni-checkbox-input-checked::before{
		border-radius: 50%;
	    width: 40rpx;
	    height: 40rpx;  
		line-height: 30rpx;
		text-align: center;
		font-size: 18rpx;
		color: #fff;
		background: transparent;
		transform: translate(-70%, -50%) scale(1);
		-webkit-transform: translate(-70%, -50%) scale(1);
	}
</style>
