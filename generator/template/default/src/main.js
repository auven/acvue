import Vue from 'vue'
import App from './App.vue'
import './icons'

Vue.config.productionTip = false

// 移动端调试工具
if (process.env.NODE_ENV !== 'production') {
  require('eruda').init()
}

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
