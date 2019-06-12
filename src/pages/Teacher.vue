<template>
<div>
    <app-header class='teacher-info'></app-header>
  <v-container grid-list-md v-if="teacher" >
  <v-layout row wrap>
    <v-flex xs8 sm10 md8 offset-sm1>
      <teacher-details :teacher = 'teacher'></teacher-details>
    </v-flex>
     <v-flex xs2 sm2 md2 offset-sm1>
      <connect></connect>
   </v-flex>
  </v-layout>
 <v-layout row wrap>
     <v-flex xs8 sm10 md8 offset-sm1>
      <teacher-profile :teacher='teacher' :teacherId='teacher.id'></teacher-profile>
   </v-flex>
   <v-flex xs2 sm2 md2>
      <rating></rating>
       <review></review>
   </v-flex>
 </v-layout>
 </v-container>
</div>
</template>

<script>

import AppHeader from '../components/AppHeader'
import TeacherDetails from '../components/TeacherDetails'
import TeacherProfile from '../components/TeacherProfile'
import Connect from '../components/Connect'
import Rating from '../components/Rating'
import Review from '../components/Review'
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
    TeacherProfile,
    Connect,
    Rating,
    Review,
    AppHeader
  }

}
</script>

<style scoped>
.mmm {
  margin: 25px;
}
.teacher-info {
  margin-bottom: 100px;
  position: relative;
}
</style>
