<template>
  <section class="agenda">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="agenda__title">Agenda</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Pesquisar ..." v-model="search" />
        </div>
      </div>
      <div class="row">
        <div v-for="event in eventsFiltered" :key="event.id" class="col-md-4">
          <Card :title="event.title" :description="event.description"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "Agenda",
  components : {
    Card
  },
  data : function(){
    return {
      search : "",
      events : [
        {
          id: 1,
          title : "Show 30 anos",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
        {
          id: 2,
          title : "cores e valores",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
        {
          id: 3,
          title : "Show 30 anos",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
        {
          id: 4,
          title : "cores e valores",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
        {
          id: 5,
          title : "Show 30 anos",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
        {
          id: 6,
          title : "cores e valores",
          description : `Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book.`
        },
      ]
    }
  },
  computed: {
    eventsFiltered : function() {
      return this.events.filter((event) => event.title.toLowerCase().indexOf(this.search) > -1 )
    }
  }

}
</script>
<style>
  .agenda{
    padding: 56px 0px;
    background-color: #E2E2E2;
    width: 100%;
    height : 800px;
  } 

  .agenda .row{
    align-items: flex-start;
  }

  .agenda .agenda__title{
    font-size : 36px;
    padding: 0;
    margin : 0;
  } 

  .agenda input {
    border-radius : 50px;
    background-color: #f1f1f1;
    border: none;
    width: 70%;
    height: 30px;
    padding: 4px 14px;
    float: right;    
  }
</style>
