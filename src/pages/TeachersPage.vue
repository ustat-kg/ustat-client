<template>
  <div>
    <app-header />
    <div class="search">
       <app-search />
    </div>
    <teachers-list />
  </div>
</template>

<script>
import TeachersList from '../components/TeachersList'
import AppSearch from '../components/AppSearch'
import AppHeader from '../components/AppHeader'
export default {
  name: 'teachers-page',
  components: {
    TeachersList,
    AppSearch,
    AppHeader
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
