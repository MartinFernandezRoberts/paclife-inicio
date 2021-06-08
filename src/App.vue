<template>
  <Tech
  />
  <Home
  />
  <Mapa 
  />


</template>

<script>
import Home from './components/Home'
import Mapa from './components/Mapa'
import Tech from './components/Tech'

export default {
  name: 'App',
  components: {
    Mapa,
    Tech,
    Home
  }
}

</script>

<style>
#app {
  font-family: Bahnschrift;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
