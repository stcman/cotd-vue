<template>
  <v-app>
    <StorePicker />
    <notifications group="foo" />
  </v-app>
</template>

<script>
import StorePicker from './components/StorePicker.vue';
import './css/style.css';

export default {
  name: 'App',
  components: {
    StorePicker
  }
}
</script>

<style>

h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
}

</style>
