import { createRouter, createWebHistory } from "vue-router";
import EventLists from "../views/EventLists.vue";
import EventDetails from "../views/EventDetails.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "EventLists",
    component: EventLists,
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
