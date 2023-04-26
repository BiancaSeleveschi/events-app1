import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cities from "@/views/Cities";
import Festivals from "@/views/Festivals";
import Comedies from "@/views/Comedies";
import Sports from "@/views/Sports";
import KidsEvents from "@/views/KidsEvents";
import ItemDetails from "@/views/ItemDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cities",
    name: "Cities",
    component: Cities,
  },
  {
    path: "/festivals",
    name: "Festivals",
    component: Festivals,
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/comedies",
    name: "Comedies",
    component: Comedies,
  },
  {
    path: "/kids/events",
    name: "KidsEvents",
    component: KidsEvents,
  },
  {
    path: "/item/:id",
    name: "ItemDetails",
    component: ItemDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
