<template>
  <v-card  >
    <router-link :to="path">

    <v-img class="white--text align-end" height="250px" :src="image" style="border-radius: 20px;">
      <v-card-title
        style="
          font-family: 'SulSans', Helvetica, sans-serif;
          font-weight: 700;
          font-size: 2rem;
          width: 60%;
          border-radius: 100px;
        "
        ></v-card-title
      >
    </v-img>  
  </router-link >

  </v-card>
</template>

<script>
export default {
  props: ["path","image"]
};
</script>