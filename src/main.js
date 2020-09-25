import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css'
// import 'animate.css/animate.css'
import 'simple-parallax-js';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import {
  faShoppingCart,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faDollarSign)
library.add(faFontAwesome)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
