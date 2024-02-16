<template>
  <div class="contenedor">
    <h1>Componente Guardar</h1>

    <div class="insertar">
      <h3 for="">Ingrese los datos del Estudiante a ingresar</h3>
      <label for="">Nombre:</label>
      <input v-model="nombre" type="text" placeholder="nombre" />
      <label for="">Apellido:</label>
      <input v-model="apellido" type="text" />
      <label for="">Genero:</label>
      <input v-model="genero" type="text" />
      <label for="">Fecha de Nacimiento:</label>
      <input v-model="fechaNacimiento" type="text" />
      <label for="">Hobby:</label>
      <input v-model="hobby" type="text" />
      <label for="">Edad:</label>
      <input v-model="edad" type="text" />
      <label for="">Estado Civil:</label>
      <input v-model="estadoCivil" type="text" />
      <label for="">Numero de Hermanos:</label>
      <input v-model="numeroHermanos" type="text" />
      <label for="">Direccion:</label>
      <input v-model="direccion" type="text" />

      <button @click="insertar">Insertar</button>
    </div>
  </div>
</template>
   
<script>
import { insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      hobby: null,
      edad: null,
      estadoCivil: null,
      numeroHermanos: null,
      direccion: null,
    };
  },

  methods: {
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        hobby: this.hobby,
        edad: this.edad,
        estadoCivil: this.estadoCivil,
        numeroHermanos: this.numeroHermanos,
        direccion: this.direccion,
      };
      await insertarFachada(estuBody);
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

.insertar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  background-color: rgb(180, 255, 127);
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