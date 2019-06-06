import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from '../pages/AppLogin.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import MainPage from '../pages/MainPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import TeachersPage from '../pages/TeachersPage.vue'
import SchoolSubjects from '../pages/SchoolSubjects.vue'
import LangSubjects from '../pages/LangSubjects.vue'
import Teacher from '../pages/Teacher.vue'
import TotalFilters from '../components/TotalFilters.vue'
import MyHeader from '../components/MyHeader.vue'
import Stepper from '../components/Steppers.vue'
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
      path: '/signup-page',
      name: 'signup-page',
      component: SignUpPage
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
      path: '/teachers-page',
      name: 'teachers-page',
      component: TeachersPage
    },
    {
      path: '/teacher/:id',
      name: 'teacher',
      props: true,
      component: Teacher
    },
    {
      path: '/schoolsubjects',
      name: 'schoolsubjects',
      component: SchoolSubjects
    },
    {
      path: '/langsubjects',
      name: 'langsubjects',
      component: LangSubjects
    },
    {
      path: '/total-filters',
      name: 'totalfilters',
      component: TotalFilters
    },
    {
      path: '/my-header',
      name: 'my-header',
      component: MyHeader
    },
    {
      path: '/steppers',
      name: 'steppers',
      component: Stepper
    }
  ]
})
