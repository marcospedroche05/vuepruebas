<template>
  <div>
    <h1>Par Impar</h1>
    <label>Introduce un numero: </label>
    <input type="number" v-model.number="numero" @change="compruebaNumero()" />
    <button v-on:click="generaRandom()">Generar aleatorio</button>
    <!-- <h2 v-if="numero % 2 == 0">Es par</h2>
    <h2 v-else>Es impar</h2> -->
    <h2>{{ mensaje }}</h2>
  </div>
</template>
<script>
export default {
  name: "ParImpar",
  data() {
    return {
      numero: 0,
      mensaje: "",
    };
  },
  methods: {
    generaRandom() {
      var random = parseInt(Math.random() * 100 + 1);
      this.numero = random;
      this.compruebaNumero();
    },
    compruebaNumero() {
      if (this.numero % 2 == 0) {
        this.mensaje = "Es par";
      } else {
        this.mensaje = "Es impar";
      }
    },
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
