import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import Notfound from "../components/NotFound";
import Calculator from "../components/Calculator";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    component: Notfound
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;