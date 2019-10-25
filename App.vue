<script>
	import {showToastNoIcon} from "./utils/util.js";
	export default {
		globalData: {
			showToastNoIcon: showToastNoIcon, 
			token:""
		},  
		onLaunch: function() {
			console.log('App Launch')
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
</style>
