<template>
<div class="h-full relative ">
    <img class="z-0 h-full w-full mx-auto absolute 3xl:object-cover" :src="require('../../assets/PaclifeHome/PaclifeHome.svg')"/>
    <ContenidoHome      
    />
</div>
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