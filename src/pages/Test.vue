<template>
  <div class="test">
    <h2>Usuarios</h2>
    <button @click="getAllUers">Pegar Usuários</button>
    <div v-if="!users.length">
      aqui não tem user 
    </div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user._id">
          {{user.firstName}}
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "Test",
  data : function (){
    return {
      users : [],
    }
  },
  methods : {
    getAllUers: async function(){
      const result = await fetch('http://localhost:3001/', (request, response) => response)
      console.log(result.json())
      this.users = await result.json()
    }
  }

}
</script>
<style>
  .test{
    padding: 30px;
  }
</style>