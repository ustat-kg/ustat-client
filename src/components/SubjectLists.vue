<template>
  <div class="container">
    <div class="row my-list">
      <div class="col-10 offset-2 listparent">
        <div class="row">
          <router-link
            class="col-4 subject-list"
            v-for="(subject, index) in subjects"
            :key="index"
            :to="subject.route"
          >
            <h5 class="title">{{ subject.name }}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subjects-lists",
  props: {
    subjects: Array
  }
};
</script>

<style scoped>
.listparent {
  margin-top: -10%;
}
.subject-list {
  width: 95px;
  height: 65px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 10px;
  padding-left: 30px;
  font-size: 12px;
  outline: none;
  color: white;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  margin: 20px;
  text-align: center;
}
.title {
  font-family: "Montserrat", sans-serif;
  font-weight: inherit;
  color: white;
}
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .my-list {
    display: block;
  }
  .listparent {
    margin-top: -50%;
  }
  .subject-list {
    width: 300px;
    height: 60px;
  }
}
</style>
