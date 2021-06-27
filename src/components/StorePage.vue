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
          <StoreItem :product="product" :toggleDrawer="toggleDrawer"/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      bottom
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
import StoreItem from './StoreItem.vue';

export default {
  name: 'StorePage',
  components: {
    StoreHeader,
    Cart,
    StoreItem
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
