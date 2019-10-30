const debug=true;
const domain = debug?'slh.car.com':'';
const host = 'http://'+domain+'/api/';
const config={
	debug:debug,
	domain:domain,
	host:host,
	url:{
		'send-verify':{url:'index/sendSms',method:'post'}, //发送验证码
		'user-reg':{url:'index/reg',method:'post'},
		'user-login':{url:'index/login',method:'post'},
		
		'index-data':{url:'index/data',method:'get'},//首页所有数据
	}
}
export default config;