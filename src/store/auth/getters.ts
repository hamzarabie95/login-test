import { storeStateInterface } from "../interface";
export const getters = {
  getUser(state: storeStateInterface) {
    return state.user;
  },
  isLoggedIn(state: storeStateInterface) {
    return !!state.user;
  },
};
