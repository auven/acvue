import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// APICloud
window.apiready = () => {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}

if (process.env.VUE_APP_PLATFORM === 'h5') {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}
