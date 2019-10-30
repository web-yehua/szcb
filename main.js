import Vue from 'vue'
import App from './App'
import store from './store'  
import req from './utils/req.js'  


Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$req = req




const app = new Vue({
    ...App
})
app.$mount()
