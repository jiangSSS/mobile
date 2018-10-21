// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

import {$axios} from "./util/index"
Vue.prototype.$axios = $axios

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
