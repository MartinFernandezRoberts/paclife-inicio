<template>
<a href="https://www.paclife.tech/">
    <div class="lg:w-full h-full lg:items-center lg:flex lg:flex-col relative" id="encPaclifeTech">
        <ContenidoSvg class="hidden lg:block"
        />
        <img class="hidden md:block lg:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/FondoTechTablet.svg')" />
        <img class="block md:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/PaclifeLogoTechMovile.svg')" />
        <ContenidoTech class="lg:hidden"
        />
    </div>
</a>

</template>

<script>
import ContenidoSvg from './Contenido/ContenidoSvg.vue'
import ContenidoTech from './Contenido/ContenidoTech.vue'
export default {

    name: 'Tech',
    components: { 
        ContenidoTech,
        ContenidoSvg
    },
}
</script>

<style scoped>
    @media screen and (max-width: 499px){
        #encPaclifeTech{
            height: 650px;
        }
    }
    @media (min-width: 500px) and (max-width: 1000px){
        #encPaclifeTech{
            height: 1000px;
        }
    }

</style>