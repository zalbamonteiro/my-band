<template>
  <div class="home">
    <Header />
    <Banner />
    <Discografia />
    <Citacao />
    <Agenda />
    <NewsComponent :isButton="true" />
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";
  import Discografia from "../components/Discografia.vue";
  import Citacao from "../components/Citacao.vue";
  import Agenda from "../components/Agenda.vue";
  import NewsComponent from "../components/NewsComponent.vue";

export default {
  name : "Home",
  components : {
    Header,
    Banner,
    Discografia,
    Citacao,
    Agenda,
    NewsComponent
  }
}
</script>
<style>
</style>