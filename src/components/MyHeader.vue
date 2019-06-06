<template>
  <div>
   <v-container fluid>
         <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-tile v-for="(item,i) in menuItems" :key="`navdrawer${i}`">
          <v-list-tile-content>
            <v-list-tile v-text="item.title"></v-list-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer= !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'USTAT'"></v-toolbar-title>
      </router-link>
  <div class="container-fluid my-header">
    <div class="container">
    <div class="row my-header-down">
        <div class="col-2 col-sm-6 col-md-8 col-lg-2">
          <div class="logo">
            <h3>USTAT</h3>
          </div>
        </div>
        <div class="col-7 col-sm-6 col-md-8 col-lg-7">
          <div class="menu-list">
            <li>Все направления</li>
            <li>Найти репетитора</li>
            <li>Стать репетитором</li>
          </div>
        </div>
        <div class="col-1 col-sm-6 col-md-8 col-lg-3">
          <div class="login">
            <li>
              <a href="#">Регистрация</a>
            </li>
            <li>
              <router-link to='/app-login'>Войти</router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
    </v-toolbar>
   </v-container>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      return [
        {

          title: 'Стать репетитором',
          route: '/login'
        },
        {

          title: 'Найти репетитора',
          route: '/signup'
        },
        {

          title: 'Зарегистрироваться',
          route: '/signup'
        },
        {

          title: 'Войти',
          route: '/signup'
        }

      ]
    }
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.my-header {
  height: 80px;
  opacity: 0.7;
  background-color: black;
  width: 100%;
  position: absolute;
}
.my-header-down {
  width: 100%;
  height: 30px;
  padding: 0px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.logo {
  font-family: "Montserrat", sans-serif;
  color: white;
}
.menu-list {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
.menu-list li {
  display: flex;
  flex-wrap: wrap;
  width: 30px;
  text-align: center;
  color: grey;
  font-family: "Montserrat", sans-serif;
}
.login {
  display: flex;
  justify-content: space-evenly;
}

.login li {
  display: table-cell;
  position: relative;
  padding: 15px 0;
  font-weight: bolder;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
}
a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.12em;
  display: inline-block;
  padding: 12px 18px;
  position: relative;
}
a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: #129490;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}
</style>
