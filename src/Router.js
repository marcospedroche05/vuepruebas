import { createRouter, createWebHistory } from "vue-router";
import NombreComponent from "./components/NombreComponent.vue";
import EdadComponent from "./components/EdadComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import ParImpar from "./components/ParImpar.vue";

const myRoutes = [
  { path: "/", component: NombreComponent },
  { path: "/edad", component: EdadComponent },
  { path: "/contador", component: CicloVida },
  { path: "/directivas", component: DirectivasComponent },
  { path: "/parimpar", component: ParImpar },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
