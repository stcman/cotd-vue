<template>
  <nav id="navbar">
      <h2>Welcome to Nike</h2>
      <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/cart" exact>Cart</router-link></li>
          <li><router-link to="/about" exact>About Us</router-link></li>
      </ul>
  </nav>
</template>

<script>

export default {
  name: 'StoreHeader',
  components: {
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

    h2 {
        text-align: center;
        color: #FFF;
    }

    nav {
        background: #000;
        padding: 30px 0px;
    }

    nav ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        list-style: none;
        width: 350px;
        margin: 0 auto;
        padding-left: 0;
        margin-top: 10px;
    }

    nav ul a {
        text-decoration: none;
        color: #FFF;
    }

    nav ul a:hover {
        color: #d6ff04;
        text-decoration: underline;
    }

</style>
