import Vue from 'vue'
import App from './App'
import router from '@/router'
import '@/assets/style/reset.css'
/* eslint-disable */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
