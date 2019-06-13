<template>
  <div class="search">
    <app-header />
    <div class="container-fluid search-page">
      <div class="row content-box">
        <div class="col-8 offset-2">
          <h1 class="main-text">
            Легко и быстро находите нужного Вам человека для обучения
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 offset-4 md-8 sm-10 xs-12">
          <app-search />
        </div>
      </div>
    </div>
    <app-subjects />
    <div class="my-footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppSubjects from "../components/AppSubjects";
import AppSearch from "../components/AppSearch";
import AppFooter from "../components/AppFooter";

export default {
  name: "search-page",
  components: {
    AppHeader,
    AppSubjects,
    AppSearch,
    AppFooter
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.search-page {
  background-image: url("../assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 250px 0;
  height: 100vh;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow-x: hidden;
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
.my-footer {
  margin-top: 20%;
}

@media only screen and (min-width: 150px) and (max-width: 670px) {
  .main-text {
    font-size: 30px;
  }
  .search-page {
    background-image: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    max-width: 100%;
    overflow-x: hidden;
  }
  .search {
    padding: 0px;
    margin: 0px;
  }
  .content-box-down {
    margin-left: 0px;
  }
}
</style>
