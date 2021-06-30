<template>
  <div v-if="open===''">
        <div class="my-20">
        <MapaInicio
        />
    
        <div class="flex flex-row w-full">
        
        <TechInicio 
            class="flex-col mx-auto w-2/12 mr-36"
            @abrir="open='tech'"
        />
        <HomeInicio
            class="flex-col mx-auto w-2/12 ml-36"
            @abrir="open='home'"
        />
        
        </div>
    
        </div>
  </div>
  <MainHome v-if="open==='home'"
    @abrir="open='tech'"
  />
  <MainTech v-if="open==='tech'"
    @abrir="open='home'"

  />
</template>

<script>

import HomeInicio from './components/HomeInicio'
import MapaInicio from './components/MapaInicio'
import TechInicio from './components/TechInicio'

import MainHome from '../Home/MainHome'
import MainTech from '../Tech/MainTech'

export default {
  name: 'Hub',
  components: {
    MainHome,
    MainTech,
    HomeInicio,
    MapaInicio,
    TechInicio
  },
  data() {
    return {
        open: '',

    }
  },

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
