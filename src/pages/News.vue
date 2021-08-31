<template>
  <div>
    <Header />
    <main>
      <Banner />
      <NewsComponent :isButton="false"/>
    </main>
  </div>
</template>
<script>
  import Header from "../components/Header.vue";
  import Banner from "../components/Banner.vue";
  import NewsComponent from "../components/NewsComponent.vue";

export default {
  name : "News",
  components : {
    Header,
    Banner,
    NewsComponent
  }
}
</script>
<style>
  
</style>