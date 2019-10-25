import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const LOGIN_USER_INFO = 'login_user_info';

const state_info = {  
        token: '',  
        user_id: 0,  
        face: '',  
        name: ''  
    }
const store = new Vuex.Store({  
    state: state_info,  
    mutations: {
		initLogin(state){
			//获取登录信息
			const user_login_info= uni.getStorageSync(LOGIN_USER_INFO)
			console.log(state,user_login_info)
			console.log(typeof user_login_info)
			if(user_login_info){
				store.commit('login',user_login_info)
			}
		},
		initLoginState(state,user_login_info){
			const token = user_login_info.hasOwnProperty('token')?user_login_info.token:'';
			var user_id = 0;
			//存在登录信息
			var token_arr = token.split('.');
			user_id = parseInt([0]);
			
			state.token = token;
			state.user_id = user_id;
			state.name = user_login_info.hasOwnProperty('name')?user_login_info.name:'';  
			state.face = user_login_info.hasOwnProperty('face')?user_login_info.face:''; 
			if(state.user_id){
				
			}else{
				
			}
		},
        login(state, provider) {  
            console.log(state)  
            console.log(provider)
			//记录登录信息
			uni.setStorageSync(LOGIN_USER_INFO,provider)
			
        },  
        logout(state) {  
            state = state_info;
			//销毁登录信息
			uni.clearStorageSync(LOGIN_USER_INFO,provider)
			
        }  
    }  
})

export default store;