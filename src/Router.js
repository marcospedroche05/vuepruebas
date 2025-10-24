import { createRouter, createWebHistory } from "vue-router";
import NombreComponent from "./components/NombreComponent.vue";
import EdadComponent from "./components/EdadComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
<<<<<<< HEAD
import ParImpar from "./components/ParImpar.vue";
=======
>>>>>>> 497c05c8a3cf998ef85f74765f16d6f9d8f640a5

const myRoutes = [
  { path: "/", component: NombreComponent },
  { path: "/edad", component: EdadComponent },
  { path: "/contador", component: CicloVida },
  { path: "/directivas", component: DirectivasComponent },
<<<<<<< HEAD
  { path: "/parimpar", component: ParImpar },
=======
>>>>>>> 497c05c8a3cf998ef85f74765f16d6f9d8f640a5
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
