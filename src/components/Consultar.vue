<template>
  <div class="contenedor">
    <h1>Componente Consultar</h1>

    <div class="consulta">
      <h3 for="">Ingrese el ID Estudiante</h3>
      <input v-model="id" type="text" placeholder="id" />
      <button @click="consultarPorId">Consultar</button>
    </div>
  </div>
</template>
   
<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";

export default {
  created(){
    // //console.log("**** ROUTER: ",this.$router);
    console.log("**** Imprimo PathVariable de la URL actual con: this.$route.params.id: ",this.$route.params.id);
    console.log("**** Imprimo RequestParam de la URL actual con: this.$route.query: ",this.$route.query);
    console.log("**** Imprimo RequestParam específico de la URL actual con: this.$route.query.nombre: ",this.$route.query.nombre);
    console.log("**** Imprimo RequestParam específico de la URL actual con: this.$route.query.genero: ",this.$route.query.genero);
    // //this.consultarPorId(this.id)
  },
  data() {
    return {
      id: null,
    };
  },

  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.$route.params.id);
      console.log("Desde componente");
      console.log(data);
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

.consulta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  background-color: rgb(255, 246, 127);
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