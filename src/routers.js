import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Up from "./components/Up.vue";
import Add from "./components/Add.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/SignUp",
  },
  {
    name: "Login",
    component: Login,
    path: "/Login",
  },
  {
    name: "Up",
    component: Up,
    path: "/Up/:id",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
