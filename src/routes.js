import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import New from "./pages/New.vue";

const routes = [
  {
    path: "/", component: Home,
  },
  {
    path: "/noticia/:id", component: New 
  },
  {
    path: "/noticias", component: News 
  },
];

const router = new VueRouter({
    routes ,
    mode: 'history'
})

export default router
  
