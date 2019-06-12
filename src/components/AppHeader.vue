<template>
  <div class="container-fluid my-header">
    <div class="container">
      <div class="row my-header-down">
        <div class="col-2 col-sm-4 col-md-4 col-lg-2">
         <router-link to="/" tag="span" style="cursor:pointer">
            <div class="logo">
            <h3>USTAT</h3>
          </div>
         </router-link>
        </div>
         <div class="col-8 col-sm-4- col-md-4 col-lg-8 center">
            <router-link
            class="menu-list"
            v-for="(menuList, index) in menuLists"
            :key="index"
            :to="menuList.route"
          >
            <h6 class="title">{{menuList.name}}</h6>
          </router-link>
         </div>
        <div class="col-2 col-sm-4 col-md-4 col-lg-2">
          <div class="login">
            <li>
              <a href="#">Регистрация</a>
            </li>
            <li>
              <router-link to="/app-login">Войти</router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      menuLists: [
        {
          name: 'Все направления',
          route: '/all-subjects'
        },
        {
          name: 'Найти репетитора',
          route: '/search-page'
        },
        {
          name: 'Стать репетитором',
          route: '/steppers'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
body {
  font-family: "Montserrat", sans-serif;
}
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
  justify-content: space-between;
  text-align: center;
}
.logo {
  font-family: "Montserrat", sans-serif;
  color: white;
}
.menu-list {
  list-style-type: none;
  display: inline-block;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  color: grey;
  flex-direction: column;
}
.title {
  font-family: "Montserrat", sans-serif !important;
  font-weight: lighter;
  color: grey;
  font-size: 13px !important;
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
