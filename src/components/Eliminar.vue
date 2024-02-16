<template>
  <div class="contenedor">
    <h1>Componente Eliminar</h1>
    <h3 for="">Ingrese el ID Estudiante</h3>
    <input v-model="id" type="text" placeholder="id" />
    <div>
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante.js";

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

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  background-color: rgb(170, 252, 225);
  border: solid 1px black;
}

button {
  margin: 10px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

h3 {
  margin: 20px;
}
</style>

