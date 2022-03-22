import Vue from 'vue'
import store from './store/index'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
