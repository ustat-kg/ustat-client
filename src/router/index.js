import Vue from "vue";
import Router from "vue-router";
import AppLogin from "../pages/AppLogin.vue";
import SignUpPage from "../pages/SignUpPage.vue";
import MainPage from "../pages/MainPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import TeachersPage from "../pages/TeachersPage.vue";
import Subjects from "../pages/Subjects.vue";
import LangSubjects from "../pages/LangSubjects.vue";
import Teacher from "../pages/Teacher.vue";
import TotalFilters from "../components/TotalFilters.vue";
import MyHeader from "../components/MyHeader.vue";
import Stepper from "../components/Steppers.vue";
import Connect from "../components/Connect.vue";
import Rating from "../components/Rating.vue";
import AppValue from "../components/AppValue.vue";
import Review from "../components/Review.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/app-login",
      name: "app-login",
      component: AppLogin
    },
    {
      path: "/signup-page",
      name: "signup-page",
      component: SignUpPage
    },
    {
      path: "/main-page",
      name: "main-page",
      component: MainPage
    },
    {
      path: "/",
      name: "search-page",
      component: SearchPage
    },
    {
      path: "/teachers-page",
      name: "teachers-page",
      component: TeachersPage
    },
    {
      path: "/teacher/:id",
      name: "teacher",
      props: true,
      component: Teacher
    },
    {
      path: "/subjects/:subject_slug ",
      name: "subjects",
      component: Subjects
    },
    {
      path: "/langsubjects",
      name: "langsubjects",
      component: LangSubjects
    },
    {
      path: "/total-filters",
      name: "totalfilters",
      component: TotalFilters
    },
    {
      path: "/my-header",
      name: "my-header",
      component: MyHeader
    },
    {
      path: "/steppers",
      name: "steppers",
      component: Stepper
    },
    {
      path: "/connect",
      name: "connect",
      component: Connect
    },
    {
      path: "/rating",
      name: "rating",
      component: Rating
    },
    {
      path: "/app-value",
      name: "app-vaule",
      component: AppValue
    },
    {
      path: "/review",
      name: "review",
      component: Review
    }
  ]
});
