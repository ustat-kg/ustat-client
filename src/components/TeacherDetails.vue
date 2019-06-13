<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-card class="teachers-card">
        <v-container fluid class="teachers-card-down">
          <v-layout row class>
            <v-flex xs2 md3>
              <v-card-media
                :src="teacher.avatarImg"
                class="ava-image"
              ></v-card-media>
            </v-flex>
            <v-flex xs6 md4 class="title">
              <v-card-title>
                <div>{{ teacher.name }} {{ teacher.surname }}</div>
                <div class="title-short">{{ teacher.shortInfo }}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs4 md4>
              <v-card-actions class="teacher-right">
                <div class="price">{{ teacher.price }} сом/ в час</div>
                <div class="subject">{{ teacher.subject }}</div>
                <div class="rating">
                  <v-rating
                    v-model="teacher.rating"
                    color="yellow"
                    readonly
                    dense
                    half-increments
                  ></v-rating>
                  <div>
                    {{ teacher.rating }}
                    <span>({{ teacher.ratingsCount }})</span>
                  </div>
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
export default {
  props: {
    teacher: {
      type: Object,
      required: true
    }
  }
};
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
  font-family: "Montserrat", sans-serif !important;
  font-weight: bolder;
}
.teachers-card {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 170px;
  margin-top: 80px;
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
  font-family: "Montserrat", sans-serif !important;
  font-weight: initial;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 12px;
}
.title-short {
  font-family: "Montserrat", sans-serif !important;
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
  font-family: "Montserrat", sans-serif !important;
  font-weight: lighter;
  font-size: 10px;
  margin-left: 70%;
}
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .details-btn {
    background-color: #129490;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: bolder;
    width: 50px;
    height: 25px;
    text-decoration: none;
  }
  .ava-image {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-left: 5%;
  }

  .price {
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
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
    justify-content: center;
    flex-direction: flex;
    align-items: center;
    padding: 0px;
    height: 100%;
    width: 100%;
  }
  .rating {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    height: 120px;
    width: 100%;
  }
  .title-short {
    font-family: "Montserrat", sans-serif;
    color: #129490;
    font-weight: lighter;
    font-size: 12px;
    text-transform: none;
  }
  .teachers-card-down {
    padding: 5px;
  }
  .subject {
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
    font-size: 10px;
    margin-left: 70%;
  }
  .teacher-name {
    font-size: 18px;
  }
}
</style>
