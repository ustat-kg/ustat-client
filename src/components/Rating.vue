<template>

  <v-layout class="my-rating">
    <v-flex xs3 sm3 offset-sm1 class='text-xs center'>
 <v-dialog v-model="finishDialog" persistent max-width="450px">
 <v-btn slot="activator" color="teal darken-1" dark @click="finishDialog=false" class='my-rating'>
  Оценить
 </v-btn>
 <v-card @submit.prevent="setRating">
   <v-card-title>
     <div class="my-value">Моя оценка</div>
   </v-card-title>
   <v-card-text>
     <v-rating v-model='rating' color='yellow accent-4' large half-increments middle></v-rating>
   </v-card-text>
   <v-card-actions>
     <v-spacer></v-spacer>
     <v-btn flat @click.native='finishDialog=false'>
       <v-icon>close</v-icon>Закрыть
     </v-btn>
     <v-btn  type="submit" flat class="btn-value" @click.native='finishDialog=false'>
       <v-icon>check</v-icon> Done!</v-btn>
   </v-card-actions>
 </v-card>
 </v-dialog>
</v-flex>
  </v-layout>

</template>

<script>
export default {
  name: 'rating',
  data() {
    return {
      finishDialog: false,
      rating: 1
    }
  },
  methods: {
    setRating(){
      this.$store.dispatch('SET_TEACHER_RATING', {rating: this.rating})
    }
  }
}
</script>

<style scoped>
.my-value {
  font-family: "Montserrat", sans-serif!important;
  font-size: 18px;
  font-weight: lighter;
}
.center {
  margin-left: 70px;
  position: relative;
  font-family: "Montserrat", sans-serif;

}
.btn-value {
  /* background-color:#00897B;
  color:white; */
  font-family: "Montserrat", sans-serif;
}
.my-rating {
  width: 170px;
}
</style>
