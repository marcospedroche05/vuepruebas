<template>
  <div>
    <h1>Propiedad conmutada</h1>
    <label>Introduzca un numero</label>
    <input type="number" v-model="numero" />
    <div v-html="evaluarNumero"></div>
    <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul>
    <ul>
      <li v-for="game in juegos" :key="game">
        {{ game }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "PropiedadConmutada",
  computed: {
    evaluarNumero() {
      let data = "";
      if (this.numero % 2 == 0) {
        data = "<h4 style='color:green'>Par: " + this.numero + "</h4>";
      } else {
        data = "<h4 style='color:red'>Impar: " + this.numero + "</h4>";
      }
      return data;
    },
    //SE ESCRIBE COMO UN METODO PERO SE UTILIZA COMO UNA PROPIEDAD
    juegosRojos() {
      var datos = this.juegos;
      var i = 0;
      for (var game of this.juegos) {
        var juegoRojo = "<span style='color:red'>" + game + "</span>";
        datos[i] = juegoRojo;
        i++;
      }
      return datos;
    },
  },
  data() {
    return {
      juegos: ["Parchis", "Canicas", "Luz verde, luz roja", "La galleta"],
      numero: 0,
    };
  },
};
</script>
<style>
@import "../assets/css/estilos.css";
</style>
