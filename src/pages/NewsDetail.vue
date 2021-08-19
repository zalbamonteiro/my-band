<template>
  <div>
    {{newDetail.title}}
    <img :src="newDetail.img" /> 
  </div>
</template>
<script>
export default {
  name : "NewsDetail",
  data: function () {
    return {
      newDetail : {},
      news: [
        {
          id: 1,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news1.png')
        },
        {
          id : 2,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news2.png')
        },
        {
          id : 3,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require('../assets/news3.png')
        },
      ]
    }
  },
  created: function() {
    const result = this.news.filter((el)=>{
      return el.id === parseInt(this.$route.params.id)
    });    

    console.log('====', result)
    this.newDetail = result[0]
  }

}
</script>
<style>
  
</style>