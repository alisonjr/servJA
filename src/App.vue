<template>
  <v-app>
    <ToolBar/>
    <v-content>
       <v-row class="ma-2">
        <v-flex md8>
          <Painel/>
        </v-flex>
        <v-flex md4>
          <FitaCaixa/>
        </v-flex>
       </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Painel from "./components/Painel";
import ToolBar from "./components/ToolBar";
import FitaCaixa from "./components/FitaCaixa";
export default {
  name: 'App',
  components: {
    Painel,
    ToolBar,
    FitaCaixa,
  },

  data: () => ({
    //
  }),
};
</script>
