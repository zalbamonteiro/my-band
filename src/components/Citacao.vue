<template>
  <section class="citacao"> 
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="citacao__text">
            “Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. “
          </p>
          <p class="citacao__author">(Mano Bronw)</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name : "Citacao"
}
</script>
<style>
  .citacao {
    background-color : #0A0A0A;
    width: 100%;
    height: 255px;
  }

   .citacao .row{
     height: 255px;
      align-items: center;
   }

  .citacao .citacao__text {
    color: #C3121C;
    font-size : 24px;
    font-style: italic;
  }

  .citacao .citacao__author {
    color: #C3121C;
    font-size : 16px;
    text-align: right;
  }
</style>
