import Vue from 'vue'
import Router from 'vue-router'
import Account_login from '@/components/account/Account_login'
import Home_page from '@/components/home_page/Home_page'
import Movie_page from '@/components/movie_page/Movie_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Account_login',
      component: Account_login
    },
    {
      path: '/Home_page',
      name: 'Home_page',
      component: Home_page
    }   
  ]
})
