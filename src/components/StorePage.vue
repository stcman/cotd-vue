<template>
  <div id="myStore">
    <StoreHeader :toggleDrawer="toggleDrawer" />

    <v-sheet
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="product in activeStoreItems" :key="product.id">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-img
                height="250"
                :src="product.images[0].src"
              ></v-img>
            </v-responsive>
            <v-card-text>
              <div >{{product.title}}</div>
              <span>${{product.variants[0].price}}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="addToCart(product)" depressed color="#d6ff04">
                <span>Add to Cart</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <Cart :toggleDrawer="toggleDrawer" />
    </v-navigation-drawer>
  </v-sheet>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import StoreHeader from './StoreHeader.vue';
import Cart from './Cart.vue';

export default {
  name: 'StorePage',
  components: {
    StoreHeader,
    Cart
  },
  data: () => ({
   drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
  }),
  props: {
    
  },
  computed: {
      ...mapState('sitesModule', ['mySite', 'products']),
      activeStoreItems: function(){
          return this.products.filter(el => el.vendor.toLowerCase() == this.mySite.name)
      }
    
  },
  methods: {
    toggleDrawer: function(){
        this.drawer = !this.drawer;
    },
    addToCart: function(item){
      this.$store.commit('sitesModule/addToCart', {itemId: item.id, itemData: item});
      this.drawer = true;
    }
  },
  created: function() {
    this.$store.dispatch('sitesModule/setProducts');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    border: 5px solid #000;
    height: 100vh;
}

.v-navigation-drawer {
    width: 40% !important;
}
</style>
