import { createRouter, createWebHistory } from "vue-router";
import Preguntas from "./components/Preguntas.vue";
import Parcial from "./components/Parcial.vue";

const routes = [
  { path: "/", redirect: "/parcial" },

  { path: "/parcial", component: Parcial },
  { path: "/preguntas", component: Preguntas },

  { path: "/:pathmatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
