<template>
  <div>
    <app-header />
    <div class="signup-page">
      <signup />
    </div>
  </div>
</template>

<script>
import AppSignUp from "../components/AppSignUp";
import AppHeader from "../components/AppHeader";

console.log(AppSignUp);

export default {
  name: "signup-page",
  components: {
    AppHeader,
    signup: AppSignUp
  }
};
</script>

<style scoped>
.signup-page {
  background-image: url("../assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 250px 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
