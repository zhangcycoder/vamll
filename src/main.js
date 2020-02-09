import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScroller from 'vue-scroller'



Vue.component(Spinner.name, Spinner)

Vue.use(Element)
Vue.use(VueScroller)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
