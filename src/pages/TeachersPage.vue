<template>
  <div>
    <app-header />
    <teachers-list />
    <app-pagination/>
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import TeachersList from '../components/TeachersList'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AppPagination from '../components/AppPagination'

export default {
  name: 'teachers-page',
  components: {
    TeachersList,
    AppHeader,
    AppFooter,
    AppPagination

  }
}
</script>

<style scoped>
.footer {
  margin-top:-40%;
}
</style>
