

<template>
  <v-app-bar style="margin-top: 0px">
    <div>
      <v-system-bar app style="background: white">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>

    <v-container>
      <v-card
        class="overflow-hidden"
        style="position: absolute; 
        top: 2.5%; 
        right: 0; 
        width: 100%"
      >
        <v-app-bar
          absolute
          color="white"
          dark
          hide-on-scroll
          prominent
          scroll-target="#scrolling-techniques-4"
          style="padding-top: 0.8rem"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-app-bar-title
            style="padding-bottom: 2vh; 
            color: red; 
            margin-left: 45%"
            ><v-img
              src="../assets/icon.png"
              style="margin-left: 2.4rem; 
              height: 3rem; 
              width: 3rem"
            ></v-img>
            Comida Fácil
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-4" 
        class="overflow-y-auto">
          <v-container
           style="height: 14vh;"></v-container>
        </v-sheet>
      </v-card>
    </v-container>
  </v-app-bar>
</template>
<style>
</style>