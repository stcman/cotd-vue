import {axiosWrapper} from './common/helpers';

export default {
    strict: true,
    namespaced: true,
    state: {
        mySite: {},
        isLoading: false,
        products: [],
        cartData: {},
        loginDialog: false
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
        },
        updateLoginDialog: function(state, payload){
            state.loginDialog = payload;
        },
        addToCart: function(state, payload){
            let newState = JSON.parse(JSON.stringify(state));

            //add increase item count if exist else add new item and set count
            if(newState.cartData[payload.itemId] && newState.cartData[payload.itemId].shoeSize == payload.shoeSize){
                newState.cartData[payload.itemId].itemCount++;
            }else{
                newState.cartData[payload.itemId] = payload.itemData;
                newState.cartData[payload.itemId].shoeSize = payload.shoeSize;
                newState.cartData[payload.itemId].itemCount = 1;
            }

            state.cartData = newState.cartData;
        },
        removeFromCart: function(state, payload){
            let newState = JSON.parse(JSON.stringify(state));

            if(newState.cartData[payload.itemId] && newState.cartData[payload.itemId].itemCount > 1){
                newState.cartData[payload.itemId].itemCount--;
            }else{
                delete newState.cartData[payload.itemId];
            }

            state.cartData = newState.cartData;
        }
    },
    actions: {
        setProducts: async (ctx) => {
            if(ctx.state.products.length) return;
            ctx.commit('updateIsLoading', true);
            const [response, error] = await axiosWrapper(ctx, {method: "GET", url: "http://localhost:3001/getProducts"});
            if(!error) ctx.commit('updateProducts', response.data);
        }
    },
}