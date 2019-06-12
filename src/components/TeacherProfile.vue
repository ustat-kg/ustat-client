<template>
    <div>
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
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div class="headline">Отзывы и рейтинг</div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider class="devider"></v-divider>
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>Рейтинг</div>
                <v-rating v-model="rating" background-color="teal darken-3"
                color="teal darken-3">
                </v-rating>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
             <app-value></app-value>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card >
          <v-layout>
            <v-flex xs5>
              <v-card-title primary-title>
                <div>Отзывы</div>
              </v-card-title>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>{{teacher.commentDescription}}</div>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-btn class="more" color="green darken-2" type="submit">Загрузить еще отзывы</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

    </div>

</template>

<script>
import AppValue from '../components/AppValue'
// import AppFooter from '../components/AppFooter'
export default {
  name: 'teacher-profile',
  components: {
    AppValue
    // AppFooter
  },
  data(){
    return {
      rating: 5
    }
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
.more {
  color:white;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  margin-left: 170px;
  height: 25px;
  font-weight: bolder;

}

</style>
