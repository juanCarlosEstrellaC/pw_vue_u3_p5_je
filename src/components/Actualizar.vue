<template>
  <div class="contenedor">
    <h1>Componente Actualizar</h1>

    <div class="idText">
      <h3 for="">Ingrese el ID Estudiante a Actualizar</h3>
      <input v-model="id" type="text" placeholder="id" />
    </div>

    <Estudiante
      nombreBoton="Actualizar!!!"
      @miEventoFormulario="actualizar($event)"
    />
  </div>
</template>
   
<script>
import Estudiante from "./Estudiante.vue";
import { actualizarFachada } from "../helpers/clienteEstudiante.js";

export default {
  components: {
    Estudiante,
  },
  data() {
    return {
      id: null,
    };
  },

  methods: {
    async actualizar(estudianteRecibido) {
      //let a = estudianteRecibido.id; PILAS, que en este objeto no viene el id!
      await actualizarFachada(this.id, estudianteRecibido);
      console.log("Estudiante actualizado:", this.id);
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

h3 {
  margin: 20px;
}

.idText{
  margin-bottom: 20px;
}
</style>