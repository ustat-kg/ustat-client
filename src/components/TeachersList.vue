<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        v-for="teacher in teachers"
        :key="teacher.id"
        xs12
        sm10
        md8
        offset-sm1
        offset-md2
      >
        <teacher :teacher="teacher"></teacher>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Teacher from "./TeacherListItem";
export default {
  props: {
    teachers: Array
  },
  components: {
    Teacher
  }
};
</script>
