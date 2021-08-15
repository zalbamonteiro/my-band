<template>
  <div>
    <Header />
    <Banner />
    <h2>Aqui e minha página de news </h2>
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";

export default {
  name : "News",
  components : {
    Header,
    Banner
  }
}
</script>
<style>
  
</style>