import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import Notifications from 'vue-notification'

Vue.component('v-select', vSelect)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
