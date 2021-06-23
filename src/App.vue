<template>
  <v-app>
    <div id="main-container">
      <StoreLoader  v-if="isLoading"/>
      <router-view></router-view>
      <notifications group="foo" />
      
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import StoreLoader from './components/StoreLoader.vue';
import './css/style.css';

export default {
  name: 'App',
  components: {
    StoreLoader
  },
  computed: {
    ...mapState('globalModule', ['activeStep']),
    ...mapState('sitesModule', ['mySite','isLoading']),
  },
  updated: function(){
    if(!this.mySite.name) this.$router.push('/');
  }
}
</script>

<style>

#main-container {
  background: #cfcfcf;
  height: 100%;
}

h2, h3, h4, h5, h6, nav li {
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
}

</style>
