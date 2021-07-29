<template>
  <Selector
  />
  <div v-show="open==='inicio'">
      <div class="my-20 3xl:my-28">
        
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
  <MainHome v-show="open==='home'"
    @abrir="open='tech'"
    @volver="open='inicio'"
  />
  <MainTech v-show="open==='tech'"
    @abrir="open='home'"
    @volver="open='inicio'"
  />
</template>

<script>
import Selector from '../Idioma/Select.vue'

import HomeInicio from './components/HomeInicio.vue'
import MapaInicio from './components/MapaInicio.vue'
import TechInicio from './components/TechInicio.vue'

import MainHome from '../Home/MainHome.vue'
import MainTech from '../Tech/MainTech.vue'



export default {
  name: 'Hub',
  components: {
    MainHome,
    MainTech,
    HomeInicio,
    MapaInicio,
    TechInicio,
    Selector
  },
  data() {
    return {
        open: 'inicio',

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
