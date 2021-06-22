<template>
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
</template>

<script>
import HomeInicio from './HomeInicio'
import MapaInicio from './MapaInicio'
import TechInicio from './TechInicio'



export default {
    name: "ElementosInicio",
    components: {
    MapaInicio,
    TechInicio,
    HomeInicio
    },
    data() {
        return {
        openTech: false,
        openHome: false
        }
    },

}
</script>