<template>
  <div>
    <app-header />
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-container fluid class="filteriline">
            <v-layout row>
              <v-flex xs12 md8>
                <v-text-field label="Поиск" v-model="q"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <teachers-list :teachers="filteredTeachers" />
    <app-pagination />
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import TeachersList from "../components/TeachersList";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppPagination from "../components/AppPagination";

export default {
  name: "teachers-page",
  components: {
    TeachersList,
    AppHeader,
    AppFooter,
    AppPagination
  },
  data() {
    return {
      q: ""
    };
  },
  computed: {
    teachers() {
      return this.$store.getters.getTeachers;
    },
    filteredTeachers() {
      let teachers = this.teachers;
      // eslint-disable-next-line curly
      if (this.q)
        teachers = teachers.filter(
          b =>
            b.name.toLowerCase().indexOf(this.q.toLowerCase()) >= 0 ||
            b.shortInfo.toLowerCase().indexOf(this.q.toLowerCase()) >= 0
        );
      // if (this.price.length) {
      //   teachers = teachers.filter(b => this.price.filter(val => b.price.indexOf(val) !== -1).length > 0)
      // }
      return teachers;
    }
  },
  url: {
    q: "q"
  }
};
</script>

<style scoped>
.footer {
  margin-top: -40%;
}
.filteriline {
  margin-top: 7vh;
}
</style>
