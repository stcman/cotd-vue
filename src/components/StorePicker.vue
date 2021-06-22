<template>
  <div class="storeContainer">
    <form class= "store-selector" @submit="checkForm">
        <h2>Please Select A Store</h2>
        <div id="storeInputs">
            <v-select
              v-model="select"
              :items="items"
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
   items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
   select: "" 
  }),
  props: {
    msg: String
  },
  computed: {
     
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

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
