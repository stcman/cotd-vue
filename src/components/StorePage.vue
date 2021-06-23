<template>
  <div id="myStore">
    <StoreHeader :toggleDrawer="toggleDrawer" />
    <!-- <div class="body">
        <div>1</div>
        <div>2</div>
    </div> -->

    <v-sheet
    height="100vh"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <p>TESTING</p>
    </v-navigation-drawer>
  </v-sheet>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import StoreHeader from './StoreHeader.vue';

export default {
  name: 'StorePage',
  components: {
    StoreHeader
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
    width: 65% !important;
}
</style>
