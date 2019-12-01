<template>
<v-app>
    <v-toolbar 
        app
        color="deep-purple"
        dark
    >
        <v-app-bar-nav-icon @click.stop="drawerControl = !drawerControl" />

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
    <v-navigation-drawer
        class="deep-purple accent-4"
        fixed
        dark
        temporary
        v-model="drawerControl"
    >
        <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
            <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>

        <template v-slot:append>
        <div class="pa-2">
            <v-btn block>Logout</v-btn>
        </div>
        </template>
    </v-navigation-drawer>
    <v-content>
        <v-row class="ma-2">
        <v-flex md8 sm8>
            <Painel/>
        </v-flex>
        <v-flex md4 sm4>
            <FitaCaixa/>
        </v-flex>
        </v-row>
    </v-content>
</v-app>
</template>

<script>
import Painel from "./components/Painel";
import FitaCaixa from "./components/FitaCaixa"

export default {
  name: 'App',
  components: {
    Painel,
    FitaCaixa,
  },

  data: () => ({
    drawerControl: false,
    items: [
        { title: 'Dashboard', icon: 'mdi-tablet-dashboard' },
        { title: 'Account', icon:'mdi-account' },
        { title: 'Admin', icon: 'mdi-key' },
    ],
  }),
};
</script>
