import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false;

import {Layout, Alert} from 'bootstrap-vue/es/components'
Vue.use(Layout);
Vue.use(Alert);

import "./assets/colores.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

store.commit('increment')
console.log(`propiedad 'count' incrementada desde 'main.js': ${store.state.count}`)
