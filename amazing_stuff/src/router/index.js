import Vue from 'vue'
import Router from 'vue-router'
import Account_login from '@/components/account/Account_login'
import Home_page from '@/components/home_page/Home_page'
import Menu_index from '@/components/menu_index/Menu_index'
import Movie_play from '@/components/movie_page/Movie_play'
import needs from '@/components/add_needs/needs'
import Movie_menu_all from '@/components/movie_page/Movie_menu_all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Account_login',
      name: 'Account_login',
      component: Account_login
    },
    {
      path: '/Home_page',
      name: 'Home_page',
      component: Home_page
    },
    {
      path: '/',
      name: 'Menu_index',
      component: Menu_index
    },
    {
      path: '/Movie_play',
      name: 'Movie_play',
      component: Movie_play
    },
    {
      path: '/needs',
      name: 'needs',
      component: needs
    },
    {
      path: '/Movie_menu_all',
      name: 'Movie_menu_all',
      component: Movie_menu_all
    },
  ]
})
