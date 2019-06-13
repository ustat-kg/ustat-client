<template>
  <div class="stepper-page">
    <v-container>
      <v-flex xs8 offset-xs3 class="stepper-page-box">
        <v-stepper v-model="e1" class="stepper-page-box">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" class="stepper-title">Step 1</v-stepper-step>
            <v-divider class="my-devider"></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2" class="stepper-title">Step 2</v-stepper-step>
            <v-divider class="my-devider"></v-divider>
            <v-stepper-step step="3" class="stepper-title">Step 3</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items class="stepper-page-box">
            <v-stepper-content step="1" class="my-content">
              <v-card class="stepper-card">
                <v-flex xs8 offset-2>
                  <form @submit.prevent="setInfoTeacher" class="login-form">
                    <v-flex xs12>
                      <input
                        type="number"
                        id="age"
                        placeholder="Возраст репетитора"
                        v-model="age"
                        class="login-form-input"
                      >

                      <v-radio-group v-model="row" row class="my-radio">
                        <v-radio label="Мужской" value="radio-1" class="my-radio" v-model="male"></v-radio>
                        <v-radio label="Женский" value="radio-2" class="my-radio" v-model="female"></v-radio>
                        <v-checkbox label="Пол не имеет значения"></v-checkbox>
                      </v-radio-group>
                    </v-flex>
                  </form>
                </v-flex>
              </v-card>
              <v-btn class="login-form-btn" @click="e1 = 2">Дальше</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="stepper-card">
                <v-flex xs10 offset-2>
                  <form @submit.prevent="setInfoTeacher" class="login-form">
                    <v-flex xs12>
                      <input
                        type="tel"
                        id="tel"
                        placeholder="Ваш номер для связи +996"
                        v-model="phone"
                        class="login-form-input"
                      >
                      <v-textarea
                        class="subject"
                        v-model="quality"
                        auto-grow
                        box
                        color="white"
                        label="Введите название предмета?"
                        rows="1"
                      ></v-textarea>
                      <v-text-field
                        class="my-textarea"
                        v-model="location"
                        box
                        label="Ваше местонахождение"
                        prepend-inner-icon="place"
                      ></v-text-field>
                    </v-flex>
                  </form>
                </v-flex>
              </v-card>
              <v-btn @click="e1 = 1" class="login-form-btn">Назад</v-btn>
              <v-btn @click="e1 = 3" class="login-form-btn">Продолжить</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="stepper-card">
                <v-flex xs10 offset-2>
                  <form @submit.prevent="setInfoTeacher" class="login-form">
                    <h3 class="text-ava">Загрузите фото профиля</h3>
                    <v-flex class="my-avatar">
                      <div class="avatar-wrapper">
                        <img class="profile-pic" src="../assets/images/145.png">
                        <div class="upload-button">
                          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </div>
                        <input class="file-upload" type="file" accept="image/*">
                      </div>
                    </v-flex>
                  </form>
                </v-flex>
              </v-card>
              <v-btn @click="e1 = 2" class="login-form-btn">Назад</v-btn>
              <v-btn type="submit" class="login-form-btn">Сохранить</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import SelectFilter from "../components/SelectFilter";
export default {
  name: "customize",
  components: {
    SelectFilter
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: null,
      male: "",
      female: false,
      e1: 0,
      column: null,
      row: null,
      subject: "",
      phone: "",
      addedInfo: "",
      location: "",
      switch1: true,
      switch2: false
    };
  },
  methods: {
    setInfoTeacher() {
      this.$store.dispatch("SET_TEACHER_INFO", this.$data);
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Lato);
.stepper-page {
  background-image: url("../assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stepper-title {
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 15px;
  color: #ffffff;
}
.my-devider {
  background-color: white;
}

.login-form {
  height: 350px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  justify-content: space-between;
  margin-top: 25px;
}

.login-form-input {
  height: 40px;
  width: 250px;
  border-radius: 5px;
  padding-left: 30px;
  font-size: 14px;
  border: 1px solid grey;
  outline: none;
  color: black;
  box-shadow: 1px 4px 8px -0.4px rgba(0, 0, 0, 0.75);
  margin-bottom: 4%;
  margin-top: 7%;
}
::placeholder {
  color: black;
}

.login-form-btn {
  height: 30px;
  width: 100px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 11px;
  background-color: #129490;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  color:white;
}

.login-form-btn::before {
  background-color: #129490;
  opacity: 1;
}

.login-form-btn:hover {
  background: #07726f;
  /* outline: none; */
}
.my-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
}
.stepper-page-box {
  background: rgba(212, 208, 208, 0.7);
  border-radius: 20px;
  height: 450px;
  width: 600px;
}
.stepper-card {
  height: 250px;
  background: rgba(82, 80, 80, 0.1);
  color: white;
  margin-bottom: 15px;
  width: 450px;
  margin-left: 50px;
}

.my-textarea {
  border-radius: 5px;
  font-size: 14px;
  color: white;
  width: 250px;
  height: auto;
  margin-left: -1%;
}
label {
  color: black;
  background-color: #ffffff;
}
.subject {
  width: 250px;
  margin-top: 2%;
}
.avatar-wrapper {
  position: relative;
  height: 100px;
  width: 100px;
  margin: 50px auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 1px 15px -5px black;
  transition: all 0.3s ease;
}
.avatar-wrapper:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.avatar-wrapper:hover .profile-pic {
  opacity: 0.5;
}
.profile-pic {
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  background-size: cover;
  background-repeat: no-repeat;
}
.profile-pic::after {
  font-family: FontAwesome;
  content: "\f007";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 60px;
  background: #ecf0f1;
  color: #727a81;
  text-align: center;
}
.upload-button {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.fa-arrow-circle-up {
  position: absolute;
  font-size: 110px;
  top: -6px;
  left: -4px;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
  color: #07726f;
}
.fa-arrow-circle-up:hover {
  opacity: 0.9;
}
.my-avatar {
  margin-top: 10px;
}
.text-ava {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
</style>
