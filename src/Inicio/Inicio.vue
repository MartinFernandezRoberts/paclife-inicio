<template>
  <div class="my-20">
    <MapaInicio
    />
    
    <div class="flex flex-row w-full ">
      
      <TechInicio class="flex-col mx-auto w-3/12"
      />
      <HomeInicio class="flex-col mx-auto w-3/12"
      />
      
    </div>
    
  </div>

</template>

<script>
import HomeInicio from './components/HomeInicio'
import MapaInicio from './components/MapaInicio'
import TechInicio from './components/TechInicio'

export default {
  name: 'Hub',
  components: {
    MapaInicio,
    TechInicio,
    HomeInicio
  }
}

</script>

<style>
#app {
  font-family: Bahnschrift;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
</style>
