import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import Notfound from "../components/NotFound";
import CalculatorPage from "../components/CalculatorPage"

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
    path: "/calculatorPage",
    name: "CalculatorPage",
    component: CalculatorPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;