<template>
  <h1>Edad: {{ edad }}</h1>
  <img src="../assets/images/20.jpg" />
</template>
<script>
export default {
  name: "EdadComponent",
  data() {
    return {
      edad: 20,
    };
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
