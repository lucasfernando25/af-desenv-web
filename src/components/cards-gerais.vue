<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="photoNames"
      height="200px"
    ></v-img>

    <v-card-title> {{ cardInfo }} </v-card-title>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
        :href="pathFood"
        target="_blank"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-text>

      <div class="my-4 text-subtitle-1" style="color:black;">${{ price }} </div>

      <div>
        {{ aboutFoods }}
      </div>
    </v-card-text>
  
  </v-card>
</template>
<script>
export default {
  props: [
    "cardid",
    "cardInfo",
    "price",
    "photoNames",
    "aboutFoods",
    "pathFood",
  ],
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>