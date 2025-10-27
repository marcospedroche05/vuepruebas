<template>
  <div>
    <h1>Metodos filter</h1>
    <ul>
      <li v-for="numero in numeros" :key="numero">
        Numero: {{ numero }}, Doble: {{ $filters.getNumeroDoble(numero) }}
      </li>
    </ul>
    <ul>
      <li v-for="name in nombres" :key="name">
        {{ $filters.mayuscula(name) }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MetodosFilter",
  data() {
    return {
      numeros: [55, 21, 33, 44, 60],
      nombres: ["Marcos", "Cano", "Jose", "Carlos"],
    };
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
