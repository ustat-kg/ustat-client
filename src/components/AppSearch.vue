<template>
  <div>
    <label for="subject-name" class="label-text">Напишите что Вы ищете?</label>
    <br />
    <input class="subject" placeholder="английский" v-model="q" />
    <button @click="goToTeachersList" class="search-my-button">
      Найти
    </button>
  </div>
</template>

<script>
export default {
  name: "app-search",
  data() {
    return {
      q: ""
    };
  },
  methods: {
    goToTeachersList() {
      if (this.q) {
        this.$router.push({
          name: "teachers-page",
          query: {
            q: this.q
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.subject-search {
  display: inline-block;
  justify-content: center;
  margin-top: 15vh;
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
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .subject {
    width: 190px;
    margin-left: -90px;
    height: 35px;
  }

  .search-my-button {
    width: 70px;
    height: 34px;
  }
  .label-text {
    color: white;
    margin-left: -50px;
  }
}
</style>
