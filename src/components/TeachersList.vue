<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <!-- <v-container fluid>
          <v-layout row>
            <v-flex>
              <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container> -->

      </v-flex>
      <v-flex v-for="teacher in teachers" :key="teacher.id" xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-container fluid>
            <v-layout row class="teachers-card">
              <v-flex xs2 md3>
                <v-card-media :src="teacher.avatarImg" class="ava-image"></v-card-media>
              </v-flex>
              <v-flex xs5 md4 >
                <v-card-title class="title">
                    <div>{{teacher.name}}  {{teacher.surname}}</div>
                    <div class="title-short">{{teacher.shortInfo}}</div>
                </v-card-title>
              </v-flex>
              <v-flex xs5 md4>
                <v-card-actions class="teacher-right">
                  <div class="price">{{teacher.price}} сом/ в час</div>
                  <div class="rating">
                    <v-rating
                      v-model="teacher.rating"
                      color="yellow"
                      readonly
                      dense
                      half-increments
                    ></v-rating>
                   <div>
                      {{teacher.rating}}
                    <span>({{teacher.ratingsCount}})</span>
                   </div>
                  </div>
                  <div>
                    <v-btn class="details-btn" flat>Подробнее</v-btn>
                  </div>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import image from '../assets/images/2.jpg'

export default {
  data() {
    return {image}
  },
  computed: {
    teachers() {
      return this.$store.getters.getTeachers
    }
  }
}
</script>

<style scoped>
.details-btn {
  background-color: #129490;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-weight: bolder;
  width: 100px;
  height: 30px;
}
.ava-image {
  border-radius: 100%;
  width: 80px;
  height: 80px;
}
.price {
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
}
.teachers-card {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.teacher-right {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0px;
}
.rating {
  text-align: center;
}
.title {
   font-family: "Montserrat", sans-serif;
   font-weight: initial;
   display: flex;
   flex-direction:column;
   justify-content: flex-start;
   align-items: flex-start;
   font-size: 12px;
   text-transform: uppercase;

}
.title-short {
   font-family: "Montserrat", sans-serif;
   color:#129490;
   font-weight: lighter ;
   font-size: 15px;
   margin-top: 10px;
   text-transform:none;
}
</style>
