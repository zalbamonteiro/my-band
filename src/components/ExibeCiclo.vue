<template>
  <div>
    <h1>Contador : {{counter}}</h1>
  </div>
</template>
<script>
export default {
  name : 'ExibeCiclo',
  props : [ 'counter'],
  updated: function() {
    console.log("update")
  },
}
</script>
<style>
  
</style>
