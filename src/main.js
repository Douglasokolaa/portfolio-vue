import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)
Vue.use(LoadScript)
Vue.use(VueReCaptcha, { siteKey: '6Lcrw6MUAAAAAGV34cBCzij3ODxdk7tDlhBAc0gh' })

import Index from './components/Index'
import Error404 from './components/Error404'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      name: 'home',
      path: '/',
      component: Index
    },
    {
      path: '*',
      component: Error404
    },
  ] 
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
