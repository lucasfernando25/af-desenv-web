<template>
  <div class="about">
    <div>
      <h1
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          width: 60%;
          border-radius: 100px;
          color: #ea1d2c;
          padding-top: 3vh;
        "
      >
        Restaurantes
      </h1>
      <div
        style="
          display: grid;
          grid-row-gap: 20px;
          grid-column-gap: 1rem;
          grid-template-columns: repeat(3, 6fr);
          padding-top: 1rem;
        "
      >
        <CardHome  v-for="(data, i) in cardsHome" :key="i"
          :image="data.imageRestaurant"
          :path="data.pathRestaurant"
        ></CardHome>
      </div>
    </div>
    <div>
      <h1
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          width: 60%;
          border-radius: 100px;
          color: #ea1d2c;
          padding-top: 10vh;
        "
      >
        Comidas
      </h1>
      <div
        style="
          display: grid;
          grid-row-gap: 20px;
          grid-column-gap: 1rem;
          grid-template-columns: repeat(3, 6fr);
          padding-top: 1rem;
        "
      >
        <CardHome  v-for="(data, i) in cardsHome" :key="i"
          :image="data.imageComidas"
          :path="data.pathComidas"
        ></CardHome>
      </div>
    </div>
  </div>
</template>

<script>
import CardHome from "../components/cards.vue";

export default {
  components: {
    CardHome,
  },
  computed: {
    cardsHome() {
      return this.$store.getters.searchHomeCards;
    },
  },
};
</script>
