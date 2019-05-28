import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '../pages/AppLogin.vue'
import MainPage from '../pages/MainPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import AppSignup from '../pages/AppSignup.vue'
import TeachersPage from '../pages/TeachersPage.vue'
import SchoolSubjects from '../pages/SchoolSubjects.vue'
import LangSubjects from '../pages/LangSubjects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app-login',
      name: 'app-login',
      component: AppLogin
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/search-page',
      name: 'search-page',
      component: SearchPage
    },
    {
      path: '/app-signup',
      name: 'app-signup',
      component: AppSignup
    },
    {
      path: '/teachers-page',
      name: 'teachers-page',
      component: TeachersPage
    },
    {
      path: '/schoolsubjects-page',
      name: 'schoolsubjects-page',
      component: SchoolSubjects
    },
    {
      path: '/langsubjects-page',
      name: 'langsubjects-page',
      component: LangSubjects
    }
  ]
})
