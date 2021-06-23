<template>
    <div id="storeLoader">
      <h3>Loading The {{name}} Store</h3>
      <img :src="require(`../assets/storeLoader.gif`)">
    </div>
</template>

<script>
export default {
  name: 'StoreLoader',
  data: () => ({

  }),
  props: {
    name: String
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#storeLoader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #000;
}

#storeLoader img {
  width: 180px;
  height: 140px;
}

#storeLoader h3 {
  position: absolute;
  color: #FFF;
  top: 58%;
}
</style>
