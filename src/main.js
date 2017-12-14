// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// if (process.env.NODE_ENV === 'development') {
//   require('element-ui/lib/theme-chalk/index.css')
// }

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
