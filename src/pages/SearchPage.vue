<template>
<div>
    <app-header/>
  <div class="container-fluid  search-page">
    <div class="row content-box">
      <div class="col-8 offset-2 ">
        <h1 class="main-text">Легко и быстро находите нужного Вам человека для обучения</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-4 md-8 sm-10 xs-12 ">
        <app-search />
      </div>
    </div>
  </div>
  <app-subjects/>
</div>

</template>
<script>
import AppHeader from '../components/AppHeader'
import AppSubjects from '../components/AppSubjects'
import AppSearch from '../components/AppSearch'
// import AppFooter from '../components/AppFooter'
export default {
  name: 'search-page',
  components: {
    AppHeader,
    AppSubjects,
    AppSearch
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.search-page {
  background-image: url("../assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 250px 0;
  width: 100%;
  height:100%;
  overflow: hidden;
}

.content-box {
  text-align: center;
  margin-top: -9%;

}
.label-text {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: bold;
}
.main-text {
  font-family: "Montserrat", sans-serif;
  color: white;
}
.subject-search {
  display: inline-block;
  justify-content: center;
  margin-top: 5vh;
}
.subject {
  height: 50px;
  width: 400px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 30px;
  font-size: 16px;
  outline: none;
  color: black;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  background-color: #cbbebe;
  opacity: 0.7;
  font-family: "Montserrat", sans-serif;
}

.search-my-button {
  height: 48px;
  width: 130px;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 15px;
  background: #129490;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  letter-spacing: 0.1cm;
  margin-left: -4px;
}
</style>
