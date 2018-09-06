{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

Vue.config.productionTip = false

if (process.env.PLATFORM !== 'app') {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    components: { App },
    template: '<App/>',
    mounted () {
      console.log('当前开发环境为：' + process.env.PLATFORM)
    }
    {{/if_eq}}
  })
}

// APICloud
window.apiready = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    components: { App },
    template: '<App/>',
    mounted () {
      console.log('当前开发环境为：' + process.env.PLATFORM)
    }
    {{/if_eq}}
  })
}
