import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import NewsDetail from "./pages/NewsDetail.vue";
import Test from "./pages/Test.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/noticias", component: News, name: "noticias" },
  { path: "/noticias/:id", component: NewsDetail, name: "noticias-detalhe" },
  { path: "/test", component: Test, name: "test" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
