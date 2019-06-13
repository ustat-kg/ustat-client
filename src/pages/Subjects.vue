<template>
  <div>
    <app-header></app-header>
    <div class="container- fluid list">
      <subject-lists :subjects="currentSubjects"></subject-lists>
    </div>
  </div>
</template>

<script>
import SubjectLists from "../components/SubjectLists";
import AppHeader from "../components/AppHeader";
export default {
  name: "schoolsubjects",
  components: {
    SubjectLists,
    AppHeader
  },
  data() {
    return {
      subjects: [
        {
          name: "Английский",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Русский язык",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Физика",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Математика",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Биология",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Геометрия",
          route: "/teachers-page",
          category: "school"
        },
        {
          name: "Кыргызский",
          route: "/langsubjects",
          category: "language"
        },
        {
          name: "Турецкий",
          route: "/artsubjects",
          category: "language"
        },
        {
          name: "Русский",
          route: "/developsubjects-page",
          category: "language"
        },
        {
          name: "1С-Бухгалтерия",
          route: "/businesssubjects-page",
          category: "development"
        },
        {
          name: "Маркетинг",
          route: "/itsubjects",
          category: "bussines"
        },
        {
          name: "SMM",
          route: "/itsubjects",
          category: "it"
        },
        {
          name: "Рисование",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Python",
          route: "/itsubjects",
          category: "it"
        },
        {
          name: "Java",
          route: "/itsubjects",
          category: "it"
        },
        {
          name: "C++",
          route: "/itsubjects",
          category: "it"
        },
        {
          name: "Ruby",
          route: "/itsubjects",
          category: "it"
        },
        {
          name: "Уроки фортепиано",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Китайский",
          route: "/itsubjects",
          category: "language"
        },
        {
          name: "Вокал",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Макраме",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Курсы икебана",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Кулинария",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Танцы",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Игра на скрипке",
          route: "/itsubjects",
          category: "art"
        },
        {
          name: "Уроки MS Office",
          route: "/itsubjects",
          category: "development"
        },
        {
          name: "Налогооблажение",
          route: "/itsubjects",
          category: "development"
        },
        {
          name: "SCRUM AGILE",
          route: "/itsubjects",
          category: "development"
        },
        {
          name: "Современные коммуникационные технологии",
          route: "/itsubjects",
          category: "bussines"
        },
        {
          name: "Эффективное управление персоналом",
          route: "/itsubjects",
          category: "bussines"
        },
        {
          name: "Менеджмент организации",
          route: "/itsubjects",
          category: "bussines"
        },
        {
          name: "Развитие стратегического мышления",
          route: "/itsubjects",
          category: "bussines"
        },
        {
          name: "Бизнес-анализ",
          route: "/itsubjects",
          category: "bussines"
        }
      ]
    };
  },
  computed: {
    currentSubjects() {
      return this.subjects.filter(
        s => s.category === this.$route.params.subject_slug
      );
    }
  }
};
</script>

<style>
.list {
  background-image: url("../assets/images/lisr.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 250px 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
