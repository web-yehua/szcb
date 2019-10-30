import Config from './config.js';
const host = Config.host;

function req(url_path,request_param){
	const url = Config.url[url_path].url;
	const method = Config.url[url_path].method;
	
	let req_obj = Object.assign({},{
		url: host+url,
		method:method,
		dataType:'json',
		data: {},
		header: {
			'content-type':'application/x-www-form-urlencoded'
		},
		success: (res) => {
			console.log('-----success------')
			console.log(res)
			var res_info = res.data;
			var res_code = res_info.code;
			var res_msg = res_info.msg;
			var res_data = res_info.hasOwnProperty('data')?res_info.data:[];
			
			if(request_param.hasOwnProperty('handleSuccess') && res_code===1){
				//操作成功
				request_param.handleSuccess(res_data,res_info)
			}else if(!request_param.hasOwnProperty('handleSuccess') && !request_param.hasOwnProperty('hide_toast') && res_code===1){
				//成功无需更多操作
				getApp().globalData.showToastNoIcon({title:res_msg,icon:'none'})
			}else{
				!request_param.hasOwnProperty('hide_toast') && getApp().globalData.showToastNoIcon(res_msg)
			}
		},
		fail: (res) => {
			console.log('-----fail------')
			console.log(res)
				
		},
		complete:(res)=>{
			console.log('-----complete------')
			console.log(res)
		},
	},request_param)
	uni.request(req_obj);
}

export default req;