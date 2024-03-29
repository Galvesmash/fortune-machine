import * as Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import i18n from './i18n';
import VueAxios from 'vue-axios';
import './assets/sass/style.scss';
// import FortuneTellerGame from 'fortune-teller-game';

Vue.createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueAxios, axios)
  // .use(FortuneTellerGame)
  .mount('#app');

// app.use(VueAxios, axios)
