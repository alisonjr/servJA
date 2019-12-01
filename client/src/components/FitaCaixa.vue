<template>
  <v-card style="height: 100%" color="" >
     <v-card-title>Resumo da Venda  </v-card-title>
    <v-data-table 
      style="max-width:100%"
      hide-default-footer
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >

      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>

    <v-btn 
      large 
      dark
      color="green"
      style="position: absolute; bottom:0; width: calc(100% - 24px)"
      class="ma-3"
    > 
      FECHAR
    </v-btn>

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

<style>

</style>