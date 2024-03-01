import fortune_machine from './fortune_machine';
import { createStore } from 'vuex';

export default createStore({
  state: {
    packageVersion: process.env.VUE_APP_VERSION || '0',
  },
  getters: {
    appVersion: (state) => {
      return state.packageVersion
    },
  },
  mutations: {
    // 
  },
  actions: {
    // 
  },
  modules: {
    fortune_machine,
  }
});