<template>
<v-container grid-list-md v-if="teacher">
  <v-layout row wrap>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <teacher-details :teacher = 'teacher'></teacher-details>
    </v-flex>
  </v-layout>

 <v-layout>
     <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <teacher-profile :teacher='teacher' :teacherId='teacher.id'></teacher-profile>
   </v-flex>
 </v-layout>
 <!-- <v-layout>
     <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
     <connect :teacher = 'teacher'></connect>
   </v-flex>
 </v-layout> -->

</v-container>
</template>

<script>

import TeacherDetails from '../components/TeacherDetails'
import TeacherProfile from '../components/TeacherProfile'
import Connect from '../components/Connect'
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
    Connect
  }

}
</script>

<style>

</style>
