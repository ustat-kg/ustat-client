<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-container fluid class="filteriline">
          <v-layout row>
            <v-flex xs12 md8>
              <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-for="teacher in filteredTeachers" :key="teacher.id" xs12 sm10 md8 offset-sm1 offset-md2>
      <teacher :teacher = 'teacher'></teacher>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Teacher from './TeacherListItem'
export default {
  data() {
    return {
      searchTerm: null
      // price: [],
      // prices: ['0-100', '101-200', '201-300', '301-400']
    }
  },
  computed: {
    teachers() {
      return this.$store.getters.getTeachers
    },
    filteredTeachers() {
      let teachers = this.teachers
      // eslint-disable-next-line curly
      if (this.searchTerm)
        teachers = teachers.filter(
          b =>
            b.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.shortInfo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
      // if (this.price.length) {
      //   teachers = teachers.filter(b => this.price.filter(val => b.price.indexOf(val) !== -1).length > 0)
      // }
      return teachers
    }
  },
  components: {
    Teacher
  }
}
</script>

<style scoped>
.filteriline {
  margin-top: 7vh;
}
</style>
