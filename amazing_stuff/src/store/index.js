import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);

import account_store from '../components/account/account_store.js';

export default new vuex.Store({
    modules: {
        account: account_store
        //other:other 其他组件
    }
})