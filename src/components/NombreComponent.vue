<template>
  <h1>Mi nombre es: {{ name }}</h1>
  <img src="../assets/images/name.webp" />
</template>
<script>
export default {
  name: "NombreComponent",
  data() {
    return {
      name: "Marcos Pedroche",
    };
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
