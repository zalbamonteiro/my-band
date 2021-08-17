import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import NewDetail from "./pages/NewDetail.vue";


const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/noticias",
    component: News,
    name: "noticias",
  },
  {
    path: "/noticias/:id",
    component: NewDetail,
    name: "noticia-detalhe",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
