<template>
<a href="https://www.paclife.tech/">
    <div class="h-full relative">
        <img class="hidden lg:block z-0 h-full w-full mx-auto absolute 3xl:object-cover" :src="require('../../assets/PaclifeTech/PaclifeTech.svg')" />
        <img class="block lg:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/PaclifeLogoTechMovile.svg')" />
        <ContenidoTech    
        />
    </div>
</a>

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
