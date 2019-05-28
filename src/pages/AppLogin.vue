<template>
<div class="app-login">
  <app-login-form />
</div>

 </template>

<script>
import AppLoginForm from '../components/AppLoginForm'

export default {
  name: 'app-login',
  components: {
    AppLoginForm
  }
}
</script>

<style scoped>
.app-login {
  background-image: url('../assets/images/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* filter: blur(3px) */
}
@media only screen
  and (min-width : 150px)
  and (max-width : 670px) {
    background-image {
      width: 290px;
    }
  }

</style>
