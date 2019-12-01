<template>
  <v-container style="height: calc(100vh - 80px);" class="pa-0"> 
    <v-layout
      class="pa-0 mr-2"
      text-center
      wrap
      style="min-height: 100%; max-height: 100%; overflow-y: scroll;"
    >
      <v-card style="min-height: 100%; min-width:100%" color="" >
        <v-container>
          <v-row class="pl-2 pr-2 d-flex justify-center">
            <CardItem v-for="produto in produtos" :key="produto.id + ''+ Date.now()" :produto="produto"/>
          </v-row>
        </v-container> 
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
// window.onscroll = ()=> {
//       alert("evento scroll detectado! " + window.pageXOffset + " " + window.pageYOffset);
// }

import CardItem from "./CardItem";
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      produtos : state => state.data.produtos
    }),
  }, 
  name: 'Painel',
  components: {
    CardItem,
  },

  methods: {
    
  },
  watch: {
  },

}
</script>

<style>


</style>