import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, VueAxios, axios);

const api = "https://corona.lmao.ninja/countries";

export const store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  getters: {
    getCountries(state) {
      let countries = state.data.map(x => x.country);
      let countriesList = countries.slice(0, 15);
      return countriesList;
    },
    getTotal(state) {
      let total = state.data.map(x => x.cases);
      let totalList = total.slice(0, 15);
      return totalList;
    },
    getTodaysTotal(state) {
      let today = state.data.map(x => x.todayCases);
      let todayList = today.slice(0, 15);
      return todayList;
    }
  },
  actions: {
    async getData({ commit }) {
      let { data } = await axios.get(api);
      console.log(data);
      commit("setData", data);
    }
  }
});
