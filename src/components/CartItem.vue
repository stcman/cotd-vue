<template>
<simplebar data-simplebar-auto-hide="false">
    <div class="cart-item-container">
        <div class="cart-item" v-for="item in cartData" :key="`${item.id}-${item.shoeSize}`">
            <img :src="item.imageUrl">
            <div class="item-stats">
                <h5>{{item.title}}</h5>
                <span>Size: {{item.shoeSize}}</span>
                <span>Quantity: {{item.itemCount}}</span>
                <button class="removeItemBtn" @click="removeItem(item.id, item.shoeSize)">Remove</button>
            </div>
            <div class="price">
                ${{calcItemPrice(item.price ,item.itemCount)}}
            </div>
        </div>
        
        <div class="empty-cart" v-if="!Object.keys(cartData).length">No items in cart</div>
    </div>
    </simplebar>
</template>

<script>

import { mapState } from "vuex";
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  name: 'CartItem',
  components: {
      simplebar
  },
  data: () => ({
   
  }),
  props: ['toggleDrawer'],
  computed: {
      ...mapState('sitesModule', ['cartData']),
    
  },
  methods: {
    calcItemPrice: function(amount, count){
        let price = parseFloat(amount);
        return price * count;
    },
    removeItem: function(itemId, shoeSize){

        this.$store.commit('sitesModule/removeFromCart', {itemId: `${itemId}-${shoeSize}`});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.removeItemBtn {
    background: #000;
    color: #FFF;
    padding: 6px;
    margin-top: 10px;
    font-size: 12px;
}

.item-stats * {
  display: block;  
}

img  {
    width: 150px;
}
#cart {
    margin-left: 20px;
    margin-top: 20px;
}

.cart-item {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    margin-top: 20px;
    grid-gap: 10px;
}

.item-stats span {
    font-size: 12px;
}

.empty-cart {
        font-weight: 500;
        text-align: center;
        margin-top: 20px;
}

</style>
