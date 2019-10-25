const debug=true;
const domain = debug?'slh.shop-uniapp.com':'';
const host = 'http://'+domain+'/api/';
const config={
	debug:debug,
	domain:domain,
	host:host,
	url:{
		'user-reg':{url:'index/reg',method:'post'},
		'user-login':{url:'index/login',method:'post'},
	}
}
export default config;