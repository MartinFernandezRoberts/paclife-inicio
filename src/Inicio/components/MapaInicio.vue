<template>
    <div class="w-full">
            <img class="w-4/12 mx-auto z-0" :src="require('../../assets/paclifeMapa.svg')"/>
            <TextoCirculos
            />

        </div>

</template>

<script>
import TextoCirculos from './svg/TextoCirculos'
export default {

    name: "Mapa",
    components: { 
        TextoCirculos
    }
}
</script>