import { createStore } from "vuex";

export default createStore({
  state: {
    count: 10,
  },
  mutations: {
    addCount(state) {
      state.count += 1;
    },
  },
  actions: {},
  modules: {},
});
