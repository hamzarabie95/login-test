import { storeStateInterface } from "../interface";
export const mutations = {
  setUser(state: storeStateInterface, payload: any) {
    state.user = payload;
  },
};
