import Vue from "vue";
import VueRouter from "vue-router";
import Todoapp from "../components/Todoapp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // Assuming you have another component for the home page
    // Add the appropriate component or redirect if necessary
    // component: Home,
    redirect: "/Todoapp", // Redirect to Todoapp by default
  },
  {
    path: "/Todoapp",
    name: "Todoapp",
    component: Todoapp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
