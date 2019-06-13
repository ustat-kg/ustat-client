// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import createStore from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import VueSync from "vue-sync";

Vue.component("v-select", vSelect);

// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

Vue.use(Vuex);
Vue.use(VueSync);
Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  theme: {
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

const store = createStore();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount("#app");
