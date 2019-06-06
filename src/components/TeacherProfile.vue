<template>
    <div>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-card>
          <v-layout>
            <v-flex xs7>
              <v-card-title primary-title>
                <div class="headline">{{profile.qualityTitle}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title>
                <div>{{profile.qualification}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title>
                <div class="headline">Про Александра</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>{{profile.bioTitle}}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{profile.bioDescription}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card >
          <v-divider></v-divider>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>{{profile.eduTitle}}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{profile.eduDescription}}</div>
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
          <v-divider></v-divider>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>{{profile.commentTitle}}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{profile.commentDescription}}</div>
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
    profile: {
      type: Object,
      required: true
    },
    teacherId: {
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
</style>
