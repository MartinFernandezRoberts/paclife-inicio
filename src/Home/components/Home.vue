<template>
<a href="https://www.paclifehome.cl/">
  <div class="h-full relative">
      <img class="hidden lg:block z-0 h-full w-full mx-auto absolute 3xl:object-cover" :src="require('../../assets/PaclifeHome/PaclifeHome.svg')"/>
      <img class="hidden md:block lg:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeHome/FondoHomeTablet.svg')" />
      <img class="block md:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeHome/PaclifeHomeMovil.svg')" />
      <ContenidoHome
      />
  </div>
</a>
</template>

<script>
import ContenidoHome from './Contenido/ContenidoHome.vue'
export default {
    name: 'Home',
    components: { 
      ContenidoHome
    }
}
</script>