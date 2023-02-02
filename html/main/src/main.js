import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  registerMicroApps,
  start
} from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
console.log(process.env.NODE_ENV);
registerMicroApps([{
    name: 'app-vue-hash',
    entry: process.env.NODE_ENV == "development" ? "http://localhost:1111" : '/child/vue-hash/',
    container: '#appContainer',
    activeRule: '/app-vue-hash',
    props: {
      data: {
        store,
        router
      }
    }
  },
  // { 
  //   name: 'app-vue-history',
  //   entry: 'http://localhost:2222', 
  //   container: '#appContainer', 
  //   activeRule: '/app-vue-history',
  //   props: { data : store }
  // },
]);

start();