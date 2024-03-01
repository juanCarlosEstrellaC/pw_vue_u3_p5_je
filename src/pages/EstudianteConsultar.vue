<template>
  <h1>Pagina Consultar</h1>
  <Consultar />
</template>

<script>
import Consultar from "../components/Consultar.vue";
export default {
  components: {
    Consultar,
  },
  created() {
    console.log(this.$router);
    console.log(this.$route.params.id);
    console.log(this.$route.query);
    console.log(this.$route.query.nombre);
    console.log(this.$route.query.genero);
  },
};
</script>

<style>
</style>