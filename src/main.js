import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./store";

Vue.config.productionTip = false;

Vue.use(axios, VueAxios);
new Vue({
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
