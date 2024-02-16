<template>
  <h1>Pagina Estudiante</h1>
  <!-- <Estudiante /> -->
  <!-- <EstudianteGuardar />
  <EstudianteConsultar />
  <EstudianteActualizar />
  <EstudianteEliminar /> -->
  
</template>
   
<script>
import Estudiante from "../components/Estudiante.vue";
import EstudianteGuardar from "./EstudianteGuardar.vue";
import EstudianteConsultar from "./EstudianteConsultar.vue";
import EstudianteActualizar from './EstudianteActualizar.vue';
import EstudianteEliminar from "./EstudianteEliminar.vue";

export default {
  components: {
    Estudiante,
    EstudianteGuardar,
    EstudianteConsultar,
    EstudianteActualizar,
    EstudianteEliminar,
  },
};
</script>
   
<style>
</style>