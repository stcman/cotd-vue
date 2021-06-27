<template>
    <div>
        <nav id="navbar">
        <img v-if="mySite" :src="require(`../assets/${mySite.imgPath}`)">
            <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li @click="toggleDrawer">Cart</li>
                <li @click="toggleLoginPopup">Login</li>
            </ul>
        </nav>
        <Login />
    </div>
</template>

<script>

import { mapState } from "vuex";
import Login from './Login.vue';

export default {
  name: 'StoreHeader',
  components: {
      Login
  },
  data: () => ({
   
  }),
  props: ['toggleDrawer'],
  computed: {
      ...mapState('sitesModule', ['mySite']),
    
  },
  methods: {
    toggleLoginPopup: function(){
        this.$store.commit('sitesModule/updateLoginDialog', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h2 {
        text-align: center;
        color: #FFF;
        font-size: 50px;
    }

    img {
        width: 200px;
        margin: 0 auto;
        display: flex;
    }

    nav {
        background: #000;
        padding: 0px 0px 25px 0px;
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
        margin-bottom: 20px;
    }

    nav ul li,
    nav ul li a {
        text-decoration: none;
        color: #FFF;
    }

    nav ul li:hover,
    nav ul li a:hover {
        color: #d6ff04;
        text-decoration: underline;
        cursor: pointer;
    }

</style>
