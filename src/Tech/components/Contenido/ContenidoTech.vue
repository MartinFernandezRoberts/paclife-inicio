<template>
    <div class="h-5/6 my-auto items-center flex">
        <div class="w-full mx-auto z-30 -mt-20">
             <div class="flex flex-col ">
                <span class="flex-row mx-auto gap-x-4 antonioFont text-center -space-y-1 ">
                        <p class=" text-blue-700 font-bold text-2xl">
                            {{ $t('tech.inocuidad') }}
                        </p>
                        <p class="text-blue-700 font-bold text-2xl">
                            {{ $t('tech.seguridad') }}
                        </p>
                        <p class=" text-blue-700 text-md font-light">
                            {{ $t('tech.cons') }}
                        </p>
                        <p class="text-xl">
                            {{ $t('tech.garant') }}
                        </p>
                </span>

            </div>
            <div class="flex flex-col pt-8">
                <span class="flex-row justify-center mx-auto bansFont align-baseline pr-20">
                        <p class=" text-blue-700 text-3xl inline tracking-tighter font-light">
                            {{ $t('tech.desde') }}
                        </p>
                        <p class="text-blue-700 font-semibold tracking-tighter text-5xl inline pl-1">
                            {{ $t('tech.cosecha') }}
                        </p>
                </span>
                <span class=" flex-row justify-center mx-auto bansFont align-baseline mt-3 pl-20">
                        <p class="text-center text-blue-700 text-3xl inline tracking-tighter">
                            {{ $t('tech.hasta') }}
                        </p>
                        <p class="text-center text-blue-700 font-semibold text-5xl inline tracking-tighter pl-1">
                            {{ $t('tech.destino') }}
                        </p>
                </span>
                
            </div>

            <div class="flex flex-col pt-8">
                <span class="flex-row justify-center mx-auto gap-x-4 antonioFont align-baseline">
                        <p class="text-gray-700 text-xl inline ">
                            {{ $t('tech.solucion') }}
                        </p>
                        <p class="text-gray-800 font-bold text-xl inline">
                            {{ $t('tech.producto') }}
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