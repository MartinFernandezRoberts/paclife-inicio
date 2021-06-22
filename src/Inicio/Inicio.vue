<template>
  <div v-if="!openTech & !openHome">
        <div class="my-20">
        <MapaInicio
        />
    
        <div class="flex flex-row w-full">
        
        <TechInicio 
            class="flex-col mx-auto w-2/12 mr-36"
            :openTech="openTech"
            @abrir="openTech=!openTech"
        />
        <HomeInicio
            class="flex-col mx-auto w-2/12 ml-36"
            :openHome="openHome"
            @abrir="openHome=!openHome"
        />
        
        </div>
    
        </div>
  </div>
  <MainHome v-if="openHome"
    :openHome="openHome"
    @abrirA="openTech=!openTech" 

  />
  <MainTech v-if="openTech"
    :openTech="openTech"
    @abrirB="openHome=!openHome"

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
      openTech: false,
      openHome: false
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
