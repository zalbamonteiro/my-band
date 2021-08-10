<template>
  <section class="discografia">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Discografia</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="album in albuns" :key="album.name" class="col-md-3">
         <div class="discografia__card">
            <img :src="album.img" :alt="album.name"/>
            <h5 v-text="album.name"></h5>
            <a :href="album.link" target="_blank"> Ouvir </a>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Discografia",
  data : function(){
    return {
      albuns : [
        {
          name: 'Nada como um dia apos um outro dia',
          img: require('../assets/album1.png'),
          link: 'https://www.youtube.com/watch?v=eRUa-1kTvT4'
        },
        {
          name: 'Core e Valores',
          img: require('../assets/album2.png'),
          link: 'https://www.youtube.com/watch?v=B3YHbLnWRg0'
        },
        {
          name: 'Sobrevivendo ao Inferno',
          img: require('../assets/album3.png'),
          link: 'https://www.youtube.com/watch?v=fVQ3YYnic2o'
        },
        {
          name: 'Raio-x do Brasil',
          img: require('../assets/album4.png'),
          link: 'https://www.youtube.com/watch?v=mz01TmFojDE&list=PLcbqoj6PmK67UM3yHwVU3ZEDv7FEogN7h'
        },
        {
          name: 'Escolha sue caminho',
          img: require('../assets/album5.png'),
          link: 'https://www.youtube.com/watch?v=2KqErUelgyc'
        },
        {
          name: 'Holocausto Urbano',
          img: require('../assets/album6.png'),
          link: 'https://www.youtube.com/watch?v=sXRE3OtRjZE'
        },
        {
          name: 'Consciencia black',
          img: require('../assets/album7.png'),
          link: 'https://www.youtube.com/watch?v=4khNAOIb5gA'
        }
      ]
    }
  }
}
</script>
<style>
  .discografia {
    padding : 56px 0;
    background-color: #212121;
    color: #e2e2e2;
  }

  .discografia h2 {
    padding-bottom : 30px;
  }

  .discografia__card{
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    height: 340px;
  }

  .discografia__card img{
    width: 100%;
    max-width: 193px;
    height: 193px;
  }

  .discografia__card a{
    display: block;
    width: 70px;
    height : 30px;
    background-color: #e2e2e2;
    color: #212121;
    text-align: center;
    text-decoration : none;
    line-height: 31px;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 900;
  }

  .discografia__card h5{
    font-size: 16px;
    text-align: center;
    padding: 0px;
    display: inline-block;
    max-width : 120px;
    margin: auto
  }
</style>
