import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import Snackbar from 'vuejs-snackbar'

Vue.component('v-select', vSelect)
Vue.component('snackbar', Snackbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
