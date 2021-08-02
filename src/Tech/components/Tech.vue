<template>
<a href="https://www.paclife.tech/">
    <div class="h-full relative" id="encPaclifeTech">
        <img class="hidden lg:block z-0 h-full w-full mx-auto absolute 3xl:object-cover" :src="require('../../assets/PaclifeTech/PaclifeTech.svg')" />
        <img class="hidden md:block lg:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/FondoTechTablet.svg')" />
        <img class="block md:hidden z-0 h-full w-full mx-auto absolute" :src="require('../../assets/PaclifeTech/PaclifeLogoTechMovile.svg')" />
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

<style scoped>

    #encPaclifeTech{
        height: 650px;
    }
    @media screen and (min-width: 500px){
        #encPaclifeTech{
            height: 1000px;
        }
    }
    @media screen and (min-width: 1000px){
        #encPaclifeTech{
            height: 620px;
        }
    }
    @media screen and (min-width: 1900px){
        #encPaclifeTech{
            height: 1000px;
        }
    }
    @media screen and (min-width: 3800px){
        #encPaclifeTech{
            height: 2150px;
        }
    }
</style>