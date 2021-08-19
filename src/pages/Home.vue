<template>
  <div class="home">
    <Header />
    <Banner />
    <Discografia />
    <Citacao />
    <Agenda />
    <NewsHome />
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";
  import Discografia from "../components/Discografia.vue";
  import Citacao from "../components/Citacao.vue";
  import Agenda from "../components/Agenda.vue";
  import NewsHome from "../components/NewsHome.vue";

export default {
  name : "Home",
  components : {
    Header,
    Banner,
    Discografia,
    Citacao,
    Agenda,
    NewsHome
  }
}
</script>
<style>
</style>