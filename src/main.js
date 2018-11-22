import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BoostrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueGridLayout from 'vue-grid-layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowsAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BoostrapVue);
Vue.use(VueGridLayout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
