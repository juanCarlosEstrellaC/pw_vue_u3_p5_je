<template>
  <h1>Pagina Eliminar</h1>
  <h3 for="">Ingrese el ID Estudiante</h3>
  <input v-model="id" type="text" placeholder="id" />
  <div>
    <button @click="eliminar">Eliminar</button>
  </div>
</template>

<script>
import {
  eliminarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
    };
  },

  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style>
</style>

