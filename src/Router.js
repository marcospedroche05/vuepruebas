import { createRouter, createWebHistory } from "vue-router";
import NombreComponent from "./components/NombreComponent.vue";
import EdadComponent from "./components/EdadComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import ParImpar from "./components/ParImpar.vue";
import MetodosFilter from "./components/MetodosFilter.vue";

const myRoutes = [
  { path: "/", component: NombreComponent },
  { path: "/edad", component: EdadComponent },
  { path: "/contador", component: CicloVida },
  { path: "/directivas", component: DirectivasComponent },
  { path: "/parimpar", component: ParImpar },
  { path: "/propiedad", component: PropiedadConmutada },
  { path: "/filter", component: MetodosFilter },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
