<template>
  <v-card style="height: 100%; display: flex; flex-direction: column;"  >
    <div 
      class="ma-3"
      style=" height: 100%;
              display: flex;
              flex-direction: column;
              border-radius: 5px;
              overflow: hidden;"
    >
      <div style="flex: 1">
        <v-card-title class="grey lighten-2">
          <span>Resumo da Venda</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-cart-outline</v-icon>
        </v-card-title>
        <v-row class="ma-0">
          <v-col :md="7">
            Produto
          </v-col>
          <v-col :md="2" class="text-center">
            Qtd
          </v-col>
          <v-col :md="3" class="text-center">
            Preço R$
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-text class="pa-0" style="flex-grow: 1;"> 
          <v-row class="ma-0">
            <v-col :md="7">
              nome do produto
            </v-col>
            <v-col :md="2" class="text-center">
              3
            </v-col>
            <v-col :md="3" class="text-right">
              12,00
            </v-col>
          </v-row>
        <v-divider></v-divider>
          <v-row class="ma-0">
            <v-col :md="7">
              nome do produto
            </v-col>
            <v-col :md="2" class="text-center">
              150
            </v-col>
            <v-col :md="3" class="text-right">
              150,00
            </v-col>
          </v-row>
        <v-divider></v-divider>
          <v-row class="ma-0">
            <v-col :md="7">
              nome do produto
            </v-col>
            <v-col :md="2" class="text-center">
              30
            </v-col>
            <v-col :md="3" class="text-right">
              5,00
            </v-col>
          </v-row>
        </v-card-text>
      </div>
      <div style="width:100%;">
        <v-row class="ma-0 grey lighten-2">
          <v-col>
            Total
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="text-right">
            R$ 7.300,00
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="ma-3">
      <v-btn 
        x-large 
        dark
        tile
        color="green"
        block
        class=""
      > 
        FECHAR
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: ()=>({
    headers: [
      { text: 'Produto', value: 'name', sortable: false },
      { text: 'Qtd', value: 'calories', sortable: false },
      { text: 'Valor (R$)', value: 'fat', sortable: false },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 'R$ 6,00',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 'R$ 9,00',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 'R$ 16,00',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 'R$ 3,70',
      },
    ],

  }),
  methods: {
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },

}
</script>

<style scoped>
 
</style>