<template>
    <div>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-card>
          <v-layout>
            <v-flex xs7>
              <v-card-title primary-title>
                <div class="headline">Квалификационные данные</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider class="devider"></v-divider>
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title>
                <div>{{teacher.qualification}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div class="headline">Про {{teacher.name}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider class="devider"></v-divider>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>Bio</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{teacher.bioDescription}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card >
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>Образование</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{teacher.eduDescription}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card >
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title>
                <div class="headline">Отзывы и рейтинги</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider class="devider"></v-divider>
          <v-layout>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{teacher.commentDescription}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </v-card>
  </div>

</template>

<script>
// import AppFooter from '../components/AppFooter'
export default {
  name: 'teacher-profile',
  components: {
    // AppFooter
  },
  props: {
    'teacher': {
      type: Object,
      required: true
    },
    'teacherId': {
      required: true
    }
  }
}
</script>

<style scoped>
.qualif {
  background-color: #129490;
  color: white;
}
.devider {
  background-color: #129490;
}

</style>
