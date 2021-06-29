<template>
  <div class="storeItem">
    <v-card class="text-xs-center ma-3">
    <v-responsive class="pt-4">
        <v-img
        height="250"
        :src="product.imageUrl"
        ></v-img>
    </v-responsive>
    <v-card-text>
        <div >{{product.title}}</div>
        <span>${{product.price}}</span>
        <v-chip-group
        v-model="chipSelection"
        active-class="black accent-4 white--text"
        column
        >
        <v-chip x-small v-for="(size, key) in product.sizes" :class="{disableClick: key == chipSelection}" :key="size">{{size}}</v-chip>

        </v-chip-group>
    </v-card-text>
    <v-card-actions>
        <v-btn @click="addToCart(product, product.sizes[chipSelection])" depressed color="#d6ff04">
        <span>Add to Cart</span>
        </v-btn>
    </v-card-actions>
    </v-card>
    
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'StoreItem',
  components: {

  },
  data: () => ({
      chipSelection: 0,
      shoeSizes: [7, 8, 9, 10, 12]
  }),
  props: ['product', 'toggleDrawer'],
  computed: {
      ...mapState('sitesModule', ['mySite', 'products']),
      activeStoreItems: function(){
          return this.products.filter(el => el.brand.toLowerCase() == this.mySite.name)
      }
    
  },
  methods: {
    addToCart: function(item, shoeSize){
      this.$store.commit('sitesModule/addToCart', {itemId: `${item.id}-${shoeSize}`, itemData: item, shoeSize});
      this.toggleDrawer();
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

.disableClick {
  pointer-events: none;
}

.v-navigation-drawer {
    width: 40% !important;
}
</style>
