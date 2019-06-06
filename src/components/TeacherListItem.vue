<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-card class="teachers-card">
        <v-container fluid class="teachers-card-down">
          <v-layout row class>
            <v-flex xs2 md3 class="ava-image-top">
              <v-card-media :src="teacher.avatarImg" class="ava-image"></v-card-media>
            </v-flex>
            <v-flex xs6 md4 >
              <v-card-title class="title">
                <div>{{teacher.name}} {{teacher.surname}}</div>
                <div class="title-short">{{teacher.shortInfo}}</div>
                <div class='subject'>{{teacher.subject}}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs4 md4 class>
              <v-card-actions class="teacher-right">
                <div class="price">{{teacher.price}} сом/ в час</div>
                <div class="rating">
                  <v-rating v-model="teacher.rating" color="yellow" readonly dense half-increments></v-rating>
                  <div>
                    {{teacher.rating}}
                    <span>({{teacher.ratingsCount}})</span>
                  </div>
                </div>
                <div>
                  <v-btn flat :to = "{name:'teacher', params:{id:teacher.id}}" class="details-btn" >Подробнее</v-btn>
                </div>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
// import image from '../assets/images/2.jpg'

export default {
  props: {
    'teacher': {
      type: Object,
      required: true
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
  text-decoration: none;
}
.ava-image {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-left: 8%;
}

.price {
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
}
.teachers-card {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 170px;
}
.teacher-right {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  height: 100%;
  width: 100%;
}
.rating {
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title {
  font-family: "Montserrat", sans-serif;
  font-weight: initial;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  height:120px;
  width: 100%;
}
.title-short {
  font-family: "Montserrat", sans-serif;
  color: #129490;
  font-weight: lighter;
  font-size: 15px;
  margin-top: 10px;
  text-transform: none;
}
.teachers-card-down {
  padding: 20px;
}
.subject {
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  font-size: 10px;
  margin-left: 70%
}

</style>
