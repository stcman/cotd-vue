
export default {
    strict: true,
    namespaced: true,
    state: {
        mySite: {}
    },
    mutations: {
        updateMySite: function(state, payload){
            state.mySite = payload;
        }
    },
    actions: {
        
    },
}