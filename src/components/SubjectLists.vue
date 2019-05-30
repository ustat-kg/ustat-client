<template>
  <div class="container">
    <div class="row">
      <div class="col-10 offset-2 listparent">
        <div class="row">
          <router-link class="col-4 subject-list"
            v-for="(subjectList, index) in subjectsLists" :key="index"
            :to="subjectList.route">
            <h5 class="title" >{{subjectList.name}}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'subjects-lists',
  data () {
    return {
      subjectsLists: [
        {
          name: 'Английский',
          route: '/schoolsubjects'
        },
        {
          name: 'Кыргызский',
          route: '/langsubjects'
        },
        {
          name: 'Турецкий',
          route: '/artsubjects'
        },
        {
          name: 'Русский',
          route: '/developsubjects-page'
        },
        {
          name: 'Немецкий',
          route: '/businesssubjects-page'
        },
        {
          name: 'Французский',
          route: '/itsubjects'
        }
      ]
    }
  }
}
</script>

<style scoped>
.listparent {
  margin-top: -10%;
}
.subject-list {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  border:1px solid grey;
  border-radius: 10px;
  padding-left: 30px;
  font-size: 12px;
  outline: none;
  color: white;
  box-shadow: 2px 8px 32px -1px rgba(0,0,0,0.75);
  margin:20px;
  text-align: center;

  }
.title {
  font-family: "Montserrat", sans-serif;
  font-weight: inherit;
  color:white;
}
</style>
