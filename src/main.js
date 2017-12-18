// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import MintUI from 'mint-ui'

//引入vuex
import store from './store'


import '@/common/js/html5plus.js'
import '@/common/css/iconfont.css'
import '@/common/scss/public.scss' 
import '@/common/js/flexible.js'
import '@/common/js/domain.js' 
import '@/common/css/reset.css'

//Vue.use(VueRouter)
//Vue.use(Vuex)

Vue.use(MintUI)
Vue.prototype.$http = axios
Vue.config.debug = true
Vue.config.productionTip = false


new Vue({
router,
store,
render: h => h(App)
}).$mount('#app')
