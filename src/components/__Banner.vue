<template>
  <section class="banner">
    <div class="banner__img">
      <img 
        src="../assets/foto_banner_1.png" 
        :class="{ 'active': activeFoto1 }"/>
      <img 
        src="../assets/foto_banner_2.jpeg"
        :class="{ 'active': activeFoto2 }"/>
    </div>
    <div class="banner__content">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button class="banner__button">Discografia</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "Banner", 
    data: function() {
      return {
        activeFoto1 : true,
        activeFoto2 : false,
      } 
    },
    methods : {
      slideBanner : function () {
        setInterval(()=>{
        this.activeFoto1 = !this.activeFoto1;
        this.activeFoto2 = !this.activeFoto2;
      }, 5000)
      }
    },
    created() {
      this.slideBanner()
    },
  }
</script>
<style>
  .banner{
    background-color: #212121;
    color : #e2e2e2;
    width : 100%;
    height : 700px;
    position: relative;
    padding : 56px 0px;
    box-sizing : border-box;
  }

  .banner__img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    overflow : hidden;
  }

  .banner__img img{
    width: 100%; 
    position: absolute;
    transition: opacity linear 2.5s;
    opacity : 0;
  }

  .banner__img img.active {
    opacity: 1;
  }

  .banner__content{
    position: relative;
    display: flex;
    height: 100%; 
  }

  .banner__content .row {
    align-items: flex-end;
  }

  .banner__content p{
    font-size : 20px;
    margin-left : 70px;
    line-height: 25px;
  }

  .banner__content button{
    font-size : 20px;
    margin-left : 70px;
    width : 170px;
    height: 40px;
    background-color: #e2e2e2;
    color: #212121;
    border: none;
    font-size: 18px;
    font-weight: 900;
    border-radius : 6px; 
  }

</style>

