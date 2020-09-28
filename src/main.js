import Vue from 'vue';
import App from './App.vue';
import {
  BootstrapVue
} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  BootstrapVueIcons
} from 'bootstrap-vue';
import router from './router';
import store from './store/store';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


Vue.use(VueAxios, axios);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');