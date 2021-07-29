<template>
    <div class="w-full">
            <div class=" absolute mx-auto w-full text-center mt-24 text-3xl" v-html="$t('inicio.bienv')">
            </div>
            <img class="w-4/12 mx-auto z-0 3xl:w-1/2" :src="require('../../assets/paclifeMapa.svg')"/>
            <TextoCirculos
            />

        </div>

</template>

<script>
import TextoCirculos from './svg/TextoCirculos.vue'
export default {

    name: "Mapa",
    components: { 
        TextoCirculos
    }
}
</script>