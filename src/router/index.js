import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/contatoView.vue"),
  },

  //{
  //  path: '/feedback',
  //  name: 'feedback',
  //  component: () => import('../views/FeedbackView.vue')
  // },
  // {
  //  path: '/sobre',
  // name: 'sobre',
  // component: () => import('../views/SobreView.vue')
  //},
  // {
  // path: '/servicos',
  //name: 'servicos',
  //component: () => import('../views/ServicosView.vue')
  //},
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/portfolioView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
