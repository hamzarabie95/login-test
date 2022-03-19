import { createStore } from "vuex";
import { Login } from "./auth/index";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login: Login,
  },
});
