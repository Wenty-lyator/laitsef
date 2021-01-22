import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)

import '@/assets/styles/main.scss';

new Vue({
  render: h => h(App),
  el: '#app',
  router
})

import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);