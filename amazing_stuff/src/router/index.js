import Vue from 'vue'
import Router from 'vue-router'
import Account_login from '@/components/account/Account_login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account_login',
      component: Account_login
    }
  ]
})
