<template>
  <!-- <EstudiantePagina /> -->
  <h1>Universidad Central del Ecuador</h1>
  <NavBar />
  <router-view />
  <h2>Todos los derechos reservados</h2>
</template>
 
<script>
import EstudiantePagina from './pages/EstudiantePagina.vue'
import NavBar from './components/NavBar.vue';
 
export default {
  name: 'App',
  components: {
    EstudiantePagina,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
