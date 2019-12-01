<template>
<v-toolbar 
    app
    color="deep-purple"
    dark
>
    <v-app-bar-nav-icon @click.stop="this.$store.state.drawer = !this.$store.state.drawer" />
    
    <v-toolbar-items>
        <v-btn text>
            <v-icon dark>mdi-food</v-icon>
            Mercearia
        </v-btn>

        <v-btn text>
            <v-icon dark>mdi-pasta</v-icon>
            Marmitas
        </v-btn>
        <v-btn text >
            <v-icon dark class="mr-3">mdi-glass-mug-variant</v-icon>
            Bebidas
        </v-btn>

    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
    }),

}
</script>

<style>

</style>