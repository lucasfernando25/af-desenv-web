<template >
  <div>
    <Carousel :content="this.$store.state.carrosel"></Carousel>

    <v-row style="padding-top:5vh">
      <v-col
        v-for="(data, i) in foodCards"
        :key="i"
        cols="12"
        md="4"
        xs="2"
        sm="2"
      >
        <CardsAbout
          :cardid="i"
          :cardInfo="data.restaurantName"
          :localizacao="data.localization"
          :price="data.price"
          :photoNames="data.path"
          :aboutFoods="data.aboutCard"
          :pathFood="data.pathRefeicoes"
        ></CardsAbout>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardsAbout from "../components/cards-gerais";
import Carousel from "../components/imagens-home.vue";

export default {
  async created() {
    await this.$store.dispatch("fetchCarousel");
    console.log(this.$store.state.homeCarousel);
  },
  name: "Food",
  data() {
    return {
      titleview: this.$store.state.title,
    };
  },
  computed: {
    foodCards() {
      return this.$store.getters.searchCards;
    },
  },
  components: {
    Carousel,
    CardsAbout,
  },
};
</script>
