import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

Vue.use(ELEMENTUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
