import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Notifications from 'vue-notification';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Notifications);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')
