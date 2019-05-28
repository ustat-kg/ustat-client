<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="teacher in teachers" :key="teacher.id" xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4 md3>
                <v-card-media :src="image" height="100px" class="ava-image"></v-card-media>
              </v-flex>

              <v-flex xs8 md9>
                <!-- <v-card-title>
                  <div>
                    <div class="price">{{teacher.price}} сом/в час</div>
                  </div>
                </v-card-title> -->
                <v-card-title>
                  <div>
                    <div class="headline">{{teacher.name}}</div>
                    <div class="headline">{{teacher.surname}}</div>
                    <div>{{teacher.shortInfo}}</div>
                  </div>
                </v-card-title>

                <!-- <v-divider class="black"></v-divider> -->
                <v-card-actions>
                  <v-rating v-model="teacher.rating" color="yellow" readonly dense half-increments></v-rating>
                  <div class="ml-1">
                    <span>{{teacher.rating}}</span>
                    <span>({{teacher.ratingsCount}})</span>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn class="details-btn" flat>Подробнее</v-btn>
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
    return { image }
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
}
.ava-image {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-left: 10px;
  margin-top: 10px;
}
.price {
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
}
</style>
