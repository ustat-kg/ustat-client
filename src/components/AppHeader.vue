<template>
  <div class="header">
    <div class="logo">
      <h3>USTAT</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.header {
  height: 10vh;
  opacity: 0.5;
  background-color: black;
  width: 100%;
  position: absolute;
}
.logo {
  font-family: 'Montserrat', sans-serif;
  color: pink;
}
</style>
