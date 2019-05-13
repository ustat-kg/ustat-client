import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '../pages/AppLogin.vue'
import MainPage from '../pages/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/',
      name: 'app-login',
      component: AppLogin
    }
  ]
})
