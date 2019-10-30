export default {
	initUserData(state,param){
		state.user_id = param.user_id-0 || 0;
		state.user_type = param.user_type-0 || 0;
		state.user_car_num = param.user_car_num || 0;
		state.user_money = param.user_money || 0.00;
		state.user_token = param.user_token || '';
		state.user_name = param.user_name || '';
		state.user_face = param.user_face || '';
	},
	
}