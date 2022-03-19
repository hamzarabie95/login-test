import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
// import {UserInterface} from "../../interface/UserInterface"

export const Login = {
  namespaced: true,
  state: () => ({
    user: {
      email: String,
      token: String,
    },
  }),
  mutations,
  actions,
  getters,
};
