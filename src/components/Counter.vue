<template>
  <div class="calc">
    <input tyope="text" v-model="num1" />
    <input tyope="text" v-model="operator" />
    <input tyope="text" v-model="num2" />
    <button @click="toCalculate" >Calcular</button>
    <p> = {{result }}</p>
  </div>
</template>
<script>
export default {
  name: "Calculetor",
  data : function(){
    return {
      num1 : null,
      num2 : null,
      operator: null,
      result : null
    }
  },
  methods : {
    toSum : function() {
      return parseInt(this.num1) + parseInt(this.num2)
    },
    toSub : function() {
      return parseInt(this.num1) - parseInt(this.num2)
    },
    toMult : function () {
      return parseInt(this.num1) * parseInt(this.num2)
    },
    tuDiv : function(){
      return parseInt(this.num1) / parseInt(this.num2)
    },
    toCalculate : function() {
      if(this.operator === "+") return this.result = this.toSum();
      if(this.operator === "-") return this.result = this.toSub();
      if(this.operator === "*") return this.result = this.toMult();
      if(this.operator === "/") return this.result = this.toDiv();

      return this.result = 0
    }
  }
}
</script>
<style>
  .calc {
    padding: 20px
  }
</style>
