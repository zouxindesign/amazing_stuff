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
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
// require('videojs-contrib-hls/dist/videojs-contrib-hls');
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件


// import 'DPlayer/dist/DPlayer.min.css';
// import DPlayer from 'DPlayer';

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

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