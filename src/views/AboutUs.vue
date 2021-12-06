<template>
  <div class="about">
    <div>
      <Sobre></Sobre>
      <TextAbout></TextAbout>
    </div>
  </div>
</template>

<script>
import TextAbout from "../components/paginaSobre.vue";
import Sobre from "../components/sobre.vue";
export default {
  components: {
    TextAbout,
    Sobre
  },
};
</script>
