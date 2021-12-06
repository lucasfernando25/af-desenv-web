<template>
  <v-app>
    <AppBar></AppBar>
    <ToolBar></ToolBar>
    <v-container 
    style="margin-top: 4rem; margin-bottom: 7rem">
      <router-view />
    </v-container>
    <v-footer app>
      <v-footer app 
      padless 
      style="background: #ea1d2c">
        <v-row justify="center" 
        no-gutters>
          <h1 style="color: white; font-size: 1.6rem; padding: 1vh">
            Comida Fácil
          </h1>
        </v-row>
      </v-footer>
      <v-bottom-navigation :value="value" 
      app grow style="padding-top:0.8vh">
        <router-link to="/">
          <v-btn>
            <span>Inicio</span>

            <v-icon>mdi-ballot-outline</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/about-us">
          <v-btn>
            <span>Sobre</span>

            <v-icon>mdi-book-open-variant</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/restaurants">
          <v-btn
            href="https://www.google.com/maps/search/restaurantes+sorocaba/@-23.4609861,-47.4791241,13.75z"
          >
            <span>Restaurantes</span>

            <v-icon>mdi-cart-minus</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/food">
          <v-btn>
            <span>Refeições</span>

            <v-icon>mdi-food</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>

import AppBar from "./components/app-bar.vue";
import ToolBar from "./components/tool-bar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    ToolBar,
  },

};
</script>
<style>
a {
  text-decoration: none;
}
.v-application--wrap {
  min-height: 0 !important;
}
</style>
