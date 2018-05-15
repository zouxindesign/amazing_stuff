import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);

import account_store from '../components/account/account_store.js'
import movie_store from '../components/movie_page/movie_store.js'

export default new vuex.Store({
    modules: {
        account_store: account_store,
        movie_store:movie_store
        //other:other 其他组件
    }
})