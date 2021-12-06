<template>
  <div class="about">
    
    <h1 style="padding-top: 3vh;color:#ea1d2c;padding-top:5vh;">Restaurantes afiliados</h1>
    <div
      style="
        display: grid;
        grid-row-gap: 20px;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(4, 7fr);
      "
    >
      <CardsRestaurant
        v-for="(data, i) in restaurant"
        :key="i"
        :cardid="i"
        :restaurantInfo="data.restaurantName"
        :distance="data.distance"
        :about="data.about"
        :path="data.path"
      ></CardsRestaurant>
    </div>
  </div>
</template>

<script>
import CardsRestaurant from "../components/cards-restaurants.vue";

export default {
  
  components: {
    CardsRestaurant,
  },
  computed: {
    restaurant() {
      return this.$store.getters.searchRestaurant;
    },
  },
};
</script>
