import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import Display from './Display.vue'
import Config from './Config.vue'

import 'normalize.css/normalize.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Display },
    { path: '/config', component: Config },
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')