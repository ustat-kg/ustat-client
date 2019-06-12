<template>
  <v-layout class="my-review">
    <v-flex xs3 sm3 offset-sm1 class='text-xs center'>
 <v-dialog v-model="finishDialog" persistent max-width="450px">
 <v-btn slot="activator" color="deep-purple accent-3" dark @click="finishDialog=false" class='my-rating'>
  Оставить отзыв
 </v-btn>
 <v-card>
   <v-card-title>
     <div class="my-value">Мой отзыв</div>
   </v-card-title>
     <v-flex xs9 sm-8 md-6 lg-10 offset-xs1>
    <form @submit.prevent="setReview" class="review-form">
     <v-textarea class="my-textarea" v-model="review" auto-grow  box  color="teal darken-1" label="Введите текст"  rows="1"></v-textarea>
    </form>
      </v-flex>
   <v-card-actions>
     <v-spacer></v-spacer>
     <v-btn flat @click.native='finishDialog=false'>
       <v-icon>close</v-icon>Закрыть
     </v-btn>
     <v-btn  type="submit" flat class="btn-value" @click.native='finishDialog=false'>
       <v-icon>check</v-icon> Отправить!</v-btn>
   </v-card-actions>
 </v-card>
 </v-dialog>
</v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'review',
  data() {
    return {
      finishDialog: false,
      review: ''
    }
  },
  methods: {
    setReview(){
      this.$store.dispatch('SET_TEACHER_REVIEW', {review: this.review})
    }
  }
}
</script>

<style scoped>
.my-review {
  font-family: "Montserrat", sans-serif!important;
  font-size: 18px;
  font-weight: lighter;
  position: absolute;
}
.center {
  margin-left: 70px;
  position: fixed;
  font-family: "Montserrat", sans-serif;

}
.btn-value {
  /* background-color:#00897B;
  color:white; */
  font-family: "Montserrat", sans-serif;
}

</style>
