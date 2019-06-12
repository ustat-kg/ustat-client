<template>
<div class="login-page">
      <form @submit.prevent='signup' class="login-form">
        <h1 class="logo-name">USTAT</h1>
        <input name="firstName" v-model="firtsName" placeholder="Name"  class="login-form-input">
        <input name="lastName"  v-model="lastName" placeholder="Last name"  class="login-form-input" >
        <input name="login" v-model="login" placeholder="login"  class="login-form-input">
        <input name="password" v-model="password"  type="password" placeholder="Пароль" class="login-form-input" >
        <input name="email" v-model="email" type="email" placeholder="Email" class="login-form-input" >
        <div class="flexcheckbox">
          <input type="checkbox" id="check">
          <label class="check-signedin" for="check">Сохранить пароль</label>
        </div>
          <button  type="submit"
            class="login-form-btn"
            >Register</button>
         </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data: () => ({
    password: '',
    firtsName: '',
    lastName: '',
    email: '',
    login: ''
  }),
  computed: {
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    isUserAuthenticated (val) {
      if (val === true) {
        this.$router.push('../pages/SearchPage.vue')
      }
    }
  },
  methods: {
    signup () {
      this.$store.dispatch('SIGNUP', this.$data)
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Lato);
.login-form {
    height: 450px;
    width: 450px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    font-family:'Lato', sans-serif;
  }
    .logo-name {
    margin-bottom: 20px;
    font-size: 40px;
    color: white;
    font-weight: 100;
    letter-spacing: 0.5cm;
    padding-left: 7%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  .login-form-input {
    height:50px;
    width: 350px;
    border:1px solid grey;
    border-radius: 25px;
    padding-left: 30px;
    font-size: 16px;
    outline: none;
    color: white;
    box-shadow: 2px 8px 32px -1px rgba(0,0,0,0.75);
    margin: 5px;
  }

  .error {
    display: none
  }

  .login-form-btn {
    height:50px;
    width: 350px;
    border:1px solid grey;
    border-radius: 25px;
    font-size: 20px;
    background: #129490;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    box-shadow: 2px 8px 32px -1px rgba(0,0,0,0.75);
    letter-spacing: 0.1cm;
  }

  .login-form-btn:hover {
    background: #07726F;
    /* outline: none; */
  }

  .flexcheckbox {
    width: 100%;
    padding-left: 50px;
  }

  .check-signedin {
    color:rgb(37, 36, 36);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  .check-signedin:hover {
    color: white;
  }

  .forgotpassword {
    font-family: 'Montserrat', sans-serif;
    color:rgb(37, 36, 36);
    font-weight: 500;
    cursor: pointer;
  }

  @media only screen
  and (min-width : 150px)
  and (max-width : 670px) {
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
