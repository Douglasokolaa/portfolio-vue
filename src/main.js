import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.use(LoadScript)
Vue.use(VueReCaptcha, { siteKey: '6Lcrw6MUAAAAAGV34cBCzij3ODxdk7tDlhBAc0gh' })

import Index from './components/Index'

Vue.config.productionTip = true

const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: Index
    },
  ] 
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
