<template>
  <div class="contenedor">
    <h1>Componente Guardar</h1>
    <Estudiante
      nombreBoton="Guardar!!!"
      @miEventoFormulario="guardarEstudiante($event)"
    />
  </div>
</template>

<script>
import Estudiante from "./Estudiante.vue";
import { insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  components: {
    Estudiante,
  },
  data() {
    return {};
  },
  methods: {
    async guardarEstudiante(estudianteRecibido) {
      await insertarFachada(estudianteRecibido);
      console.log("Estudiante guardado:", estudianteRecibido);
    },
  },
};
</script>

<style scoped>
</style>