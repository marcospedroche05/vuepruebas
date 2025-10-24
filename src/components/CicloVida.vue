<template>
  <div>
    <h1>Ciclo de vida</h1>
    <h2>Contador: {{ contador }}</h2>
    <button v-on:click="sumar()">Haz click</button>
  </div>
</template>
<script>
export default {
  name: "CicloVida",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    //AQUI INCLUIMOS NUESTROS METODOS PERSONALIZADOS
    sumar() {
      //PARA ACCEDER A LAS VARIABLES DATA DEL COMPONENT
      //DEBEMOS UTILIZAR LA PALABRA this
      this.contador += 1;
    },
  },
  mounted() {
    console.log("Cargado");
  },
  created() {
    console.log("Creado");
  },
  updated() {
    console.log("Actualizado");
  },
  unmounted() {
    console.log("Desmontado");
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
