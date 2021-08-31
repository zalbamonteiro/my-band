<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  
  export default {
    name: 'App',
  }
</script>

<style>
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif
  }

  .row { 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }

</style>
