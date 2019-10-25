import Config from './config.js';

function req(url_path,request_param){
	let host = Config.host;
	let url = Config.url[url_path].url;
	let method = Config.url[url_path].method;
	
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
			}else{
				uni.showToast({title:res_msg,icon:'none'})
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