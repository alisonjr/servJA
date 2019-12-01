<template>
  <v-card class="ma-1 cardItem" >
    <v-card-title style="font-size: 0.875rem; flex: 1">
      <div style="align-self: flex-start;">
        <b>{{produto.nome}}</b>
      </div>
    </v-card-title>
    <v-card-text>
      <span>{{produto.info}}</span>
      <br>
      <span>{{`R$ ${produto.preco}`}}</span>
    </v-card-text>  
  </v-card>
</template>

<script>
export default {
  props: {
    produto: {},
  }    
}
</script>

<style>

.cardItem{
  width: 152px; 
  height: 156px; 
  display: flex !important;
  flex-direction: column;
}
</style>
