<template>
  <div id="myStore">
    <StoreHeader />
    <div class="body">
        <div>1</div>
        <div>2</div>
    </div>
    <StoreLoader v-if="false" />
  </div>
</template>

<script>

import StoreHeader from './StoreHeader.vue';
import StoreLoader from './StoreLoader.vue';

export default {
  name: 'StorePage',
  components: {
    StoreLoader,
    StoreHeader
  },
  data: () => ({
   
  }),
  props: {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    border: 5px solid #000;
    height: 100vh;
}
</style>
