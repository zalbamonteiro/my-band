<template>
  <div>
    <ExibeCiclo :counter="counter" />
    <button @click="toIncrement"> Incrementa +1</button>
  </div>
</template>
<script>
  import ExibeCiclo from './ExibeCiclo.vue';

export default {
  name: "Ciclo",
  data : function(){
    return {
      counter : 0
    }
  },
  methods : {
    toIncrement : function(){
      this.counter = this.counter + 1
    }
  },
  components : {
    ExibeCiclo
  }
}
</script>
<style>
  
</style>
