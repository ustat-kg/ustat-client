<template>
<div class="app-login">
  <app-header />
  <!-- <app-login-form /> -->
</div>

 </template>

<script>
import AppHeader from '../components/AppHeader.vue'
// import AppLoginForm from '../components/AppLoginForm'
export default {
  name: 'app-login',
  components: {
    AppHeader
    // AppLoginForm
  }
}
</script>

<style>
.app-login {
  position: relative;
}
</style>
