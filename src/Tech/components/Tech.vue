<template>
<div class="h-full relative">
    <img class="z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/PaclifeTech.svg')" />
    <ContenidoTech    
    />
</div>


</template>

<script>
import ContenidoTech from './Contenido/ContenidoTech.vue'
export default {

    name: 'Tech',
    components: { 
        ContenidoTech
    },
}
</script>
