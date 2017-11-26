import Vue from 'vue'

/*****框架*****/
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
/*****框架*****/

/*****配置*****/
Vue.config.productionTip = false
import router from '@/router'
import store from '@/store'
// import http from '@/http'
/*****配置*****/

/*****实例*****/
import App from './App'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/*****配置*****/
