import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptor from './interceptor'

Vue.config.productionTip = false

//执行拦截器的初始化
interceptor()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
