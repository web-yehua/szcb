<template>
  <view
    :style="{ height: statusBarHeight }"
    class="uni-status-bar"><slot/></view>
</template>

<script>
var statusBarHeight = 0+ 'px';
	statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	/* #ifdef MP-WEIXIN */
	statusBarHeight = '0px'
	/* #endif */
export default {
  name: 'UniStatusBar',
  data () {
    return {
      statusBarHeight: statusBarHeight
    }
  }
}
</script>

<style>
	
.uni-status-bar {
	display: block;
	width: 100%;
	height: 20px;
	height: var(--status-bar-height);
}
</style>
