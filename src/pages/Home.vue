<template>
  <div class="home">
    <Header />
    <Banner />
    <Discografia />
    <Citacao />
    <Agenda />
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";
  import Discografia from "../components/Discografia.vue";
  import Citacao from "../components/Citacao.vue";
  import Agenda from "../components/Agenda.vue";

export default {
  name : "Home",
  components : {
    Header,
    Banner,
    Discografia,
    Citacao,
    Agenda
  }
}
</script>
<style>
</style>