
export default {
    strict: true,
    namespaced: true,
    state: {
        activeStep: 0
    },
    mutations: {
        updateActiveStep(state, payload) {
            state.activeStep = payload;
        }
    },
    actions: {
        
    },
}