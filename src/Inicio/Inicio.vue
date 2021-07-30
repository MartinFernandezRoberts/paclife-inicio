<template>
  <Selector
  />
  <div v-show="open==='inicio'">
      <div class="h-full mt-12 md:my-20 3xl:my-28 ">
        
        <MapaInicio
        />
    
        <div class="block mt-8 md:flex md:flex-row lg:w-full">
          
          <TechInicio 
              class="md:flex-col flex mx-auto lg:w-2/12 md:mr-36 w-4/6 pt-10 md:pt-0"
              @abrir="open='tech'"
          />
          <HomeInicio
              class="md:flex-col pt-8 md:pt-0 flex mx-auto lg:w-2/12 md:ml-36 w-4/6"
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
