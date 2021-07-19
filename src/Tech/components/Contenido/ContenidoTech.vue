<template>
    <div class="h-5/6 my-auto items-center flex">
        <div class="w-full mx-auto z-30 -mt-20">
             <div class="flex flex-col ">
                <span class="flex-row mx-auto gap-x-4 antonioFont text-center -space-y-1 ">
                        <p class=" text-blue-700 font-bold text-2xl">
                            INOCUIDAD
                        </p>
                        <p class="text-blue-700 font-bold text-2xl">
                            SEGURIDAD
                        </p>
                        <p class=" text-blue-700 text-md font-light">
                            Y CONSERVACIÓN
                        </p>
                        <p class="text-xl">
                            GARANTIZADA
                        </p>
                </span>

            </div>
            <div class="flex flex-col pt-8">
                <span class="flex-row justify-center mx-auto bansFont align-baseline pr-20">
                        <p class=" text-blue-700 text-3xl inline tracking-tighter font-light">
                            DESDE
                        </p>
                        <p class="text-blue-700 font-semibold tracking-tighter text-5xl inline pl-1">
                            COSECHA
                        </p>
                </span>
                <span class=" flex-row justify-center mx-auto bansFont align-baseline mt-3 pl-20">
                        <p class="text-center text-blue-700 text-3xl inline tracking-tighter">
                            HASTA
                        </p>
                        <p class="text-center text-blue-700 font-semibold text-5xl inline tracking-tighter pl-1">
                            DESTINO
                        </p>
                </span>
                
            </div>

            <div class="flex flex-col pt-8">
                <span class="flex-row justify-center mx-auto gap-x-4 antonioFont align-baseline">
                        <p class="text-gray-700 text-xl inline ">
                            UNA SOLUCIÓN
                        </p>
                        <p class="text-gray-800 font-bold text-xl inline">
                            PARA CADA PRODUCTO
                        </p>
                </span>

            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'ContenidoTech'
}
</script>

<style scoped>
    @font-face {
        font-family: Antonio;
        src: url('../../../assets/fonts/Antonio-Regular.ttf');
    }
    @font-face {
        font-family: Bahns;
        src: url('../../../assets/fonts/Bahns.ttf');
    }
    
    .antonioFont{
        font-family: Antonio;
    }

    .bansFont{
        font-family: Bahns;
    }
</style>