import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import 'simple-parallax-js'
import LoadScript from 'vue-plugin-load-script'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(LoadScript)

Vue.config.productionTip = false

Vue.LoadScript('custom.js')
new Vue({
  render: h => h(App),
}).$mount('#app')
