<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="teacher in teachers" :key="teacher.id" xs12 sm10 md8 offset-sm1 offset-md-2>
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout row>
              <v-flex xs4 md3>
                <v-card-media :src='image' height="100px"></v-card-media>
              </v-flex>
              <v-flex xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{teacher.name}}</div>
                    <div class="headline">{{teacher.surname}}</div>
                    <div>{{teacher.shortInfo}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-rating v-model="teacher.rating" color="yellow" readonly dense half-increments>
                    <div class="ml-1">
                      <span>{{teacher.rating}}</span>
                    </div>
                  </v-rating>
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
import image from '../assets/art.png'
export default {
  data(){
    return {image}
  },
  computed: {
    teachers () {
      return this.$store.getters.getTeachers
    }
  }
}
</script>

<style>
</style>
