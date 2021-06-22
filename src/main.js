import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Notifications)

const store = new Vuex.Store({
    state: {
        count: 0
    }
});

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
