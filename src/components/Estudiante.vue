<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultarPorId">Consultar</button>
  <input v-model="nombre" type="text" />


  <input v-model="apellido" type="text" />
  <button @click="insertar">Insertar</button>

</template>
   
  <script>
import {
  consultarEstudianteFachada,
  insertarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre:null,
      apellido:null,
    };
  },

  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente");
      console.log(data);
    },
    async insertar() {
      const estuBody = {
        nombre: "Juan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "1996-01-29T00:00:00",
        hobby: "Soccer",
        edad: 25,
        estadoCivil: "Soltero",
        numeroHermanos: 2,
        direccion: "Quito, Ecuador",
      };
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>