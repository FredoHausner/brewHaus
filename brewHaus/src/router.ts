import {createRouter, createWebHistory} from "vue-router";
import Home from "./Home.vue";
import BreweryDetails from "./components/BreweryDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brewery/:id",
    name: "BreweryDetails",
    component: BreweryDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
