<template>
  <v-row justify="center">
    <v-dialog
      v-model="loginDialog"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title>
          <span class="text-h5">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="email"
                    label="Email*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="password"
                    label="Password*"
                    type="password"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Login',
  components: {
  },
  data: () => ({
   dialog: true,
   email: "",
   password: ""
  }),
  props: [],
  computed: {
      ...mapState('sitesModule', ['mySite', 'loginDialog']),
    
  },
  methods: {
    closeDialog: function(){
        this.$store.commit('sitesModule/updateLoginDialog', false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
