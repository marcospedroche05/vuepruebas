<template>
  <h1>MENU</h1>
  <ul id="menu">
    <li><router-link to="/">Nombre</router-link></li>
    <li><router-link to="/edad">Edad</router-link></li>
    <li><router-link to="/contador">Contador</router-link></li>
    <li><router-link to="/directivas">Directivas</router-link></li>
    <li><router-link to="/parimpar">Par impar</router-link></li>
    <li><router-link to="/propiedad">Propiedad conmutada</router-link></li>
  </ul>
  <hr />
  <router-view></router-view>
</template>
<script>
export default {
  name: "MenuComponent",
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
