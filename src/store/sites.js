import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://www.deadstock.ca/collections/footwear/products.json?limit=250'
};

export default {
    strict: true,
    namespaced: true,
    state: {
        mySite: {},
        isLoading: false,
        products: []
    },
    mutations: {
        updateMySite: function(state, payload){
            state.mySite = payload;
        },
        updateIsLoading: function(state, payload){
            state.isLoading = payload;
        },
        updateProducts: function(state, payload){
            state.products = payload;
        }
    },
    actions: {
        setProducts: (ctx) => {
            if(ctx.state.products.length) return;
            ctx.commit('updateIsLoading', true);
            axios.request(options).then(function (response) {
                console.log(response.data.products);
                ctx.commit('updateProducts', response.data.products);
                ctx.commit('updateIsLoading', false);
            }).catch(function (error) {
                console.error(error);
                ctx.commit('updateIsLoading', false);
            });
        }
    },
}