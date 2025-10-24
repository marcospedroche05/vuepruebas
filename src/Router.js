import { createRouter, createWebHistory } from "vue-router";
import NombreComponent from "./components/NombreComponent.vue";
import EdadComponent from "./components/EdadComponent.vue";

const myRoutes = [
  { path: "/", component: NombreComponent },
  { path: "/edad", component: EdadComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
});

export default router;
