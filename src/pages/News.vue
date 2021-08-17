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
  name: "News",
  components: {
    Header,
    Banner,
    NewsComponent
  },
  data: function (){
    return{
      news : [
        {
          id: 1,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news1.png')
        },
        {
          id:2,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news3.png')
        },
        {
          id:3,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news2.png')
        }
      ]
    }
  }
};
</script>
<style>
</style>