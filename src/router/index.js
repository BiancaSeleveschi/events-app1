import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Festivals from "@/views/Festivals";
import Comedies from "@/views/Comedies";
import Sports from "@/views/Sports";
import KidsEvents from "@/views/KidsEvents";
import ItemDetails from "@/views/ItemDetails";
import Search from "@/views/Search";
import CardDetails from "@/views/CardDetails";
import Checkout from "@/views/Checkout";
import CityEvents from "@/views/CityEvents";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
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
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/card",
    name: "CardDetails",
    component: CardDetails,
  },
  {
    path: "/city/events/:city",
    name: "CityEvents",
    component: CityEvents,
    props: true,
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
