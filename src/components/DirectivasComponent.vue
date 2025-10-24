<template>
  <div>
    <h1>Ejemplo directivas</h1>
    <h2>{{ $data }}</h2>
    <ul v-if="miArray.length > 0">
      <li v-for="elemento in miArray" :key="elemento">{{ elemento }}</li>
    </ul>
    <label>Introduce un numero</label>
    <input type="number" v-model="numero" /><br />
    <h3 v-if="numero > 0" style="color: green">POSITIVO</h3>
    <h3 v-else-if="numero < 0" style="color: red">NEGATIVO</h3>
    <h3 v-else style="color: blue">CERO</h3>
    <label>Introduce un nombre</label>
    <input type="text" v-model="nombre" />
    <label>Nuevo elemento</label>
    <input type="text" v-model="pushNuevo" />
    <button v-on:click="nuevoElemento()">Enviar</button>
  </div>
</template>
<script>
export default {
  name: "DirectivasComponent",
  data() {
    return {
      numero: 0,
      nombre: "Alumno",
      miArray: ["Vue", "Es", "Bien", "God"],
      pushNuevo: "",
    };
  },
  methods: {
    nuevoElemento() {
      this.miArray.push(this.pushNuevo);
    },
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
