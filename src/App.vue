<template>
 <formulario-component></formulario-component> 
</template>

<script>
import FormularioComponent from '@/components/FormularioComponent.vue'

export default {
  name: 'App',
  components: {
   FormularioComponent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
