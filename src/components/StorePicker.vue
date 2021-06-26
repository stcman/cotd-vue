<template>
  <div class="storeContainer">
    <form class= "store-selector" @submit="checkForm">
        <h2>Please Select A Store</h2>
        <img :src="require(`../assets/${activeSite.imgPath}`)">
        <div id="storeInputs">
            <v-select
              v-model="select"
              :items="storeNames"
              label="Store"
              dense
            ></v-select>
            <button type="submit">Visit Store</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'StorePicker',
  data: () => ({
   storeNames: ['nike', 'jordan', 'adidas', 'converse'],
   storeConfig: {
     nike: {
       name:'nike',
       imgPath: 'nikeLogo.png'
     },
     jordan: {
       name:'jordan',
       imgPath: 'jordanLogo.jpg'
     },
     converse: {
       name:'converse',
       imgPath: 'converseLogo.jpg'
     },adidas: {
       name:'adidas',
       imgPath: 'adidasLogo.jpg'
     }
   },
   select: "nike" 
  }),
  props: {
    msg: String
  },
  computed: {
    activeSite: function(){
      return this.storeConfig[this.select];
    }
  },
  methods: {
    checkForm: function(e){
      e.preventDefault();

      if(!this.select){
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Store not selected!',
          text: 'Please select a store!'
        });
      }

      this.$store.commit('globalModule/updateActiveStep', 1);
      this.$store.commit('sitesModule/updateMySite', this.activeSite);
      this.$router.push(`store/${this.activeSite.name}`);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
    width: 300px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 50px;
    border: 1px solid;
    border-radius: 20px;
}

button {
  background: #000;
  border-radius: 2px;
  color: #FFF;
  padding: 10px;
}

.store-selector {
    background: #fff;
    max-width: 500px;
    margin: 50px auto;
    padding: 2rem;
    border: 2px solid #000;
}

h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
}

.store-selector input[type="text"], .store-selector button[type="text"] {
    text-align: center;
    font-size: 2rem;
}

#storeInputs {
    display: grid;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
