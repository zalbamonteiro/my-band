<template>
  <div>
    aqui vai cada noticia  {{idNew}}
  </div>
</template>
<script>
export default {
  name : "New",
  data : function () {
    return {
      idNew : this.$route.params.id 
    }
  }
}
</script>
<style>
  
</style>