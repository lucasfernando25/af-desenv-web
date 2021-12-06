<template>
<div
        style="
          display: grid;
          grid-row-gap: 20px;
          grid-column-gap: 1rem;
          grid-template-columns: repeat(3, 6fr);
          padding-top: 1rem;
        "
      >
      <v-card class="mx-auto" max-width="344" style="margin-top: 5vh">
        <v-img :src="path" height="200px"></v-img>

        <v-card-title> {{ restaurantInfo }}</v-card-title>

        <v-card-subtitle> {{ distance }} </v-card-subtitle>

        <v-card-actions>
          <router-link to="/food">
            <v-btn color="#ea1d2c" text> COMPRAR AQUI </v-btn>
          </router-link>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ about }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
</div>
</template>

<script>
export default {
  props: ["restaurantInfo", "distance", "about", "path"],
  data: () => ({
    show: false,
  }),
};
</script>