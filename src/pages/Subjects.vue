<template>
  <div>
    <app-header/>
    <div class="container- fluid list">
      <subject-lists :subjects="currentSubjects"/>
    </div>
  </div>
</template>

<script>
import SubjectLists from '../components/SubjectLists'
import AppHeader from '../components/AppHeader'
export default {
  name: 'schoolsubjects',
  components: {
    SubjectLists,
    AppHeader
  },
  data() {
    return {
      subjects: [
        {
          name: 'Английский',
          route: '/teachers-page',
          category: 'school'
        },
        {
          name: 'Кыргызский',
          route: '/langsubjects',
          category: 'it'
        },
        {
          name: 'Турецкий',
          route: '/artsubjects',
          category: 'art'
        },
        {
          name: 'Русский',
          route: '/developsubjects-page',
          category: 'art'
        },
        {
          name: '1С-Бухгалтерия',
          route: '/businesssubjects-page',
          category: 'development'
        },
        {
          name: 'Маркетинг',
          route: '/itsubjects',
          category: 'bussines'
        },
        {
          name: 'SMM',
          route: '/itsubjects',
          category: 'it'
        },
        {
          name: 'Рисование',
          route: '/itsubjects',
          category: 'art'
        },
        {
          name: 'Python',
          route: '/itsubjects',
          category: 'art'
        },
        {
          name: 'Фотепиано',
          route: '/itsubjects',
          category: 'art'
        },
        {
          name: 'Китайский',
          route: '/itsubjects',
          category: 'language'
        },
        {
          name: 'Вокал',
          route: '/itsubjects',
          category: 'art'
        },
        {
          name: 'Игра на скрипке',
          route: '/itsubjects',
          category: 'art'
        }
      ]
    }
  },
  computed: {
    currentSubjects(){
      return this.subjects.filter(s => s.category === this.$route.params.subject_slug)
    }

  }
}
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
