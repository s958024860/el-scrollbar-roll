import Vue from 'vue'
import './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.count = 0

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
