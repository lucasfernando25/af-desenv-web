<template>
  <div>
    <div class="textos">
      Com o Comida Fácil, você consegue
      <p>uma ótima refeição de maneira fácil e rápida.</p>

      <div style="margin-top: 6vh">
        Podendo ter diversos restaurantes a um toque de distância
        <p>considerados os melhores do PAÍS</p>
      </div>
    </div>
    <h1>Nós servimos comidas de todos os cantos do Brasil</h1>
    <div
      style="
        display: grid;
        grid-row-gap: 20px;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(8, 6fr);
        padding-top: 1rem;
        width: 20px;
      "
    >
      <CardHome
        v-for="(data, i) in cardsHome"
        :key="i"
        :image="data.imageComidas"
        :path="data.pathComidas"
      ></CardHome>
    </div>
   
    <h1 style="padding-top: 10vh">
      Nós temos também o apoio de diversos restaurantes famosos no brasil.
    </h1>
    <div
      style="
        display: grid;
        grid-row-gap: 20px;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(8, 6fr);
        padding-top: 1rem;
        width: 20px;
      "
    >
      <CardHome
        v-for="(data, i) in cardsHome"
        :key="i"
        :image="data.imageRestaurant"
        :path="data.pathRestaurant"
      ></CardHome>
    </div>
  </div>
</template>
<script>
import CardHome from "./cards.vue";

export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  computed: {
    cardsHome() {
      return this.$store.getters.aboutSearch;
    },
  },
  components: {
    CardHome,
  },
};
</script>
<style>
.textos {
  margin-top: 6vh;
  margin-bottom: 5vh;
  text-align: center;
  width: 50%;
  margin-left: 25%;
  font-family: "SulSans", Helvetica, sans-serif;
  font-weight: 500;
  font-size: 2rem;
}
</style>