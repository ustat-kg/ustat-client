<template>
<v-container grid-list-md v-if="teacher">
  <v-layout row wrap>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <teacher-details :teacher = 'teacher'></teacher-details>
    </v-flex>
  </v-layout>
      <v-flex v-for="profile in teacher.profiles" :key ="profile.id" xs12 sm10 md8 offset-sm1 offset-md2>
    <teacher-profile :profile='profile' :teacherId='teacher.id'></teacher-profile>
    </v-flex>
</v-container>
</template>

<script>

import TeacherDetails from '../components/TeacherDetails'
import TeacherProfile from '../components/TeacherProfile'
export default {
  props: {
    'id': {
      type: String,
      required: true
    }
  },
  computed: {
    teacher(){
      return this.$store.getters.getTeachers.find(b => b.id === this.id)
    }
  },
  components: {
    TeacherDetails,
    TeacherProfile
  }

}
</script>

<style>

</style>
