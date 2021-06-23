import Vue from 'vue'
import Vuex from 'vuex';
import sitesModule from './sites.js';
import globalModule from './global.js';

Vue.use(Vuex)

export default new Vuex.Store({
    //inividual store instances
    modules: { 
        globalModule,
        sitesModule
    },
    actions: {
        // checkServerReady: axiosWrapper(() => {
        //     return axios.get('/ready');
        // })
    }
})