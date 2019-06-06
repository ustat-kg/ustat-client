<template>
  <div class="stepper-page">
    <v-container>
      <v-flex xs8 offset-xs2 class="stepper-page-box">
        <v-stepper v-model="e1" class="stepper-page-box">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" class="stepper-title">Общая информация</v-stepper-step>
            <v-divider class="my-devider"></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2" class="stepper-title">Заполнение профиля</v-stepper-step>
            <v-divider class="my-devider"></v-divider>
            <v-stepper-step step="3" class="stepper-title">Контакты</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items class="stepper-page-box">
            <v-stepper-content step="1">
              <v-card class="stepper-card">
                <v-flex xs9 offset-3>
                  <form @submit.prevent="signIn" class="login-form">
                    <v-flex xs12>
                      <input type="text" id="name" placeholder="Ваше имя" v-model="name" class="login-form-input">
                      <input type="text" id="surname" placeholder="Ваше фамилия" v-model="name" class="login-form-input">
                      <input type="email" id="email"  placeholder="Укажите электронную почту" v-model="name" class="login-form-input">
                      <input type="password" id="password" placeholder="Введите пароль" v-model="name" class="login-form-input">
                      <input type="number" id="age" placeholder="Укажите  полный Ваш возраст" v-model="name" class="login-form-input">
                      <v-radio-group v-model="row" row class="my-radio">
                        <v-radio label="Мужской" value="radio-1" class="my-radio"></v-radio>
                        <v-radio label="Женский" value="radio-2" class="my-radio"></v-radio>
                      </v-radio-group>
                    </v-flex>
                  </form>
                </v-flex>
              </v-card>
              <v-btn class="login-form-btn" @click="e1 = 2">Дальше</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="stepper-card">
                <v-flex xs9 offset-3>
                  <form @submit.prevent="signIn" class="login-form">
                    <v-flex xs12>
                      <input type="text" id="formalBack" placeholder="Укажите формальное образование "  v-model="formalBack" class="login-form-input">
                    </v-flex>
                    <v-textarea class="my-textarea" v-model="bio" auto-grow  box  color="white" label="Bio"  rows="1"></v-textarea>
                    <v-textarea class="my-textarea"  v-model="quality" auto-grow box color="white" label="Опыт и квалификация" rows="1" ></v-textarea>
                    <v-textarea class="my-textarea"  v-model="shortInfo" auto-grow  box color="white" label="Ключевые слова/название предмета/теги" rows="1"></v-textarea>
                  </form>
                </v-flex>
              </v-card>
               <v-btn @click="e1 = 1" class="login-form-btn">Назад</v-btn>
               <v-btn @click="e1 = 3" class="login-form-btn">Продолжить</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="stepper-card">
                <v-flex xs9 offset-3>
                  <form @submit.prevent="signIn" class="login-form">
                    <v-flex xs12>
                      <input  type="tel"  id="tel"  placeholder="Ваш номер для связи +996" v-model="phone" class="login-form-input">
                      <v-textarea class="my-textarea"  v-model="quality" auto-grow box color="white" label="Дополнительная информация" rows="1" ></v-textarea>
                     <v-text-field class="my-textarea"  box label="Ваше местонахождение" prepend-inner-icon="place"></v-text-field>
                    </v-flex>
                    <v-flex class="my-avatar">
                      <div class="avatar-wrapper">
                        <img class="profile-pic" src="../assets/images/145.png"/>
                        <div class="upload-button">
                          <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </div>
                        <input class="file-upload" type="file" accept="image/*"/>
                      </div>
                    </v-flex>
                  </form>
                </v-flex>
              </v-card>
              <v-btn @click="e1 = 2" class="login-form-btn">Назад</v-btn>
              <v-btn @click="e1 = 1" class="login-form-btn">Сохранить</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'steppers',
  data() {
    return {
      name: '',
      surname: '',
      age: null,
      e1: 0,
      column: null,
      row: null,
      items: [],
      bio: '',
      quality: '',
      shortInfo: '',
      formalBack: '',
      phone: '',
      addedInfo: ''
    }
  }
}
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
}

.login-form-input {
  height: 40px;
  width: 300px;
  border-radius: 5px;
  padding-left: 30px;
  font-size: 14px;
  border: 1px solid grey;
  outline: none;
  color: white;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  margin: 3%;
}
::placeholder {
  color: white;
}

.login-form-btn {
  height: 30px;
  width: 100px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 11px;
  background: #129490;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
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
  background: rgba(82, 80, 80, 0.1);
  border-radius: 15px;
  height: 500px;
  width: 800px;
}
.stepper-card {
  width: 800px;
  height: 100%;
  background: rgba(82, 80, 80, 0.1);
  color: white;
}
.my-textarea {
  border-radius: 5px;
  font-size: 14px;
  color: white;
  width: 400px;
  height: auto;
  margin: 3%;
}
label {
  color: white;
  background-color: #ffffff;
}
 .avatar-wrapper {
    position: relative;
    height: 100px;
    width: 100px;
    margin: 50px auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all .3s ease;
}
.avatar-wrapper:hover{
      transform: scale(1.05);
      cursor: pointer;
}
.avatar-wrapper:hover .profile-pic{
 opacity: .5;
}
 .profile-pic {
    height: 100%;
    width: 100%;
    transition: all .3s ease;
    background-size: cover;
    background-repeat: no-repeat;
}
.profile-pic::after{
  font-family: FontAwesome;
  content: "\f007";
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 60px;
  background: #ecf0f1;
  color: #34495e;
  text-align: center;
}
 .upload-button {
      position: absolute;
      top: 0; left: 0;
      height: 100%;
      width: 100%;
}
.fa-arrow-circle-up{
        position: absolute;
        font-size: 110px;
        top: -6px;
        left: -4px;
        text-align: center;
        opacity: 0;
        transition: all .3s ease;
        color:#07726f;
}
.fa-arrow-circle-up:hover {
opacity: .9;
}
.my-avatar {
  margin-top: -25%;
}
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .btnToLogin {
    width: 290px;
  }

  .login-form {
    width: 300px;
  }

  .login-form .logo-name {
    font-size: 30px;
  }
}
</style>
