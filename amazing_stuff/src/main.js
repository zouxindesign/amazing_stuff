// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/js/key' //引入bmob js-sdk
import 'lib-flexible/flexible.js'
import store from './store'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
import 'swiper/dist/css/swiper.css';

Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: '加载失败',
  attempt: 1
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})