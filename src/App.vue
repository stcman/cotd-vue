<template>
  <v-app>
    <div id="main-container">
      <router-view></router-view>
      <StoreLoader :name="mySite.name"/>
      <notifications group="foo" />
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import './css/style.css';

export default {
  name: 'App',
  components: {
    
  },
  computed: {
    ...mapState('globalModule', ['activeStep']),
    ...mapState('sitesModule', ['mySite']),
  }
}
</script>

<style>

#main-container {
  background: #cfcfcf;
  height: 100%;
}

h2, h3, h4, h5, h6, nav a {
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
}

</style>
