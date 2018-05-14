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
    // state: {
    //     test01: {
    //       name: 'Wise Wrong'
    //     },
    //     test02: {
    //       tell: '12312345678'
    //     }
    //   },
    //   actions: {
    //     // 封装一个 ajax 方法
    //     saveForm (context) {
    //       axios({
    //         method: 'post',
    //         url: '/user',
    //         data: context.state.test02
    //       })
    //     }
    // }
})