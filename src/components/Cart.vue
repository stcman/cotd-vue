<template>
  <div id="cart">
      
      <button class="closeCart" @click="toggleDrawer"><v-icon dark left large color="#000">mdi-close</v-icon></button>
      <CartItem />
      <div id="totals">
          <div class="inner">
              <span class="totalLbl">Total</span>
              <span class="priceAmt">${{cartTotal}}</span>
          </div>
          <button id="checkoutBtn">Checkout</button>
      </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import CartItem from './CartItem.vue';

export default {
  name: 'Cart',
  components: {
      CartItem
  },
  data: () => ({
   
  }),
  props: ['toggleDrawer'],
  computed: {
      ...mapState('sitesModule', ['mySite', 'cartData']),
      cartTotal: function(){
          const reducer = (accumulator, currentValue) => accumulator + (parseFloat(currentValue.price) * currentValue.itemCount);
          return Object.values(this.cartData).reduce(reducer, 0);
      }
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cart {
    display: grid;
    grid-template-rows: 50px 1fr 150px;
    height: 100vh;
    margin: 20px;
    padding-bottom: 20px;
}

#totals {
    display: grid;
    height: 150px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: #FFF;
}

#totals span {
    font-size: 25px;
}

#totals .inner {
    display: flex;
}

#totals .priceAmt {
    margin-left: auto;
}

#checkoutBtn {
    background: #000;
    color: #FFF;
    font-weight: 500;
    font-size: 20px;
}

.closeCart {
    width: 30px;
}

</style>
