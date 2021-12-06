<template>
  <v-carousel>
    <v-carousel-item
      v-for=" i of 3"
      :key="i"
      :src="content.Result[0].images[i - 1]"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from 'axios'
export default {
  
  props:["content"],

  data: () => {
    return { info: null };
  },
  mounted() {
    axios
      .get("https://foodbukka.herokuapp.com/api/v1/menu")
      .then((response) => (this.info = response));
  },
};
</script>