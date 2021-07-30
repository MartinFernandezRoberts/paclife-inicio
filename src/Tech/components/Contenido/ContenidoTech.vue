<template>
    <div class="h-5/6 my-auto items-center flex">
        <div class="w-full mx-auto z-30 -mt-10 md:-mt-12 lg:-mt-20  3xl:-mt-32">
             <div class="flex flex-col ">
                <span class="flex-row mx-auto gap-x-4 antonioFont text-center -space-y-1 ">
                        <p class=" text-blue-700 font-bold md:text-3xl lg:text-2xl 3xl:text-5xl">
                            {{ $t('tech.inocuidad') }}
                        </p>
                        <p class="text-blue-700 font-bold md:text-3xl lg:text-2xl 3xl:text-5xl">
                            {{ $t('tech.seguridad') }}
                        </p>
                        <p class=" text-blue-700 text-xs md:text-xl lg:text-md font-light 3xl:text-3xl">
                            {{ $t('tech.cons') }}
                        </p>
                        <p class="text-sm md:text-3xl lg:text-xl 3xl:text-4xl">
                            {{ $t('tech.garant') }}
                        </p>
                </span>

            </div>
            <div class="flex flex-col pt-16 md:pt-12 lg:pt-8 3xl:pt-20 ">
                <span class="flex-row justify-center mx-auto bansFont align-baseline lg:pr-20 3xl:pr-28">
                        <p class=" text-blue-700 text-lg md:text-2xl lg:text-3xl lg:inline tracking-tighter font-light 3xl:text-5xl">
                            {{ $t('tech.desde') }}
                        </p>
                        <p class="text-blue-700 font-semibold tracking-tighter text-2xl md:text-4xl lg:text-5xl lg:inline lg:pl-1 3xl:text-7xl 3xl:pl-3">
                            {{ $t('tech.cosecha') }}
                        </p>
                </span>
                <span class=" flex-row justify-center mx-auto bansFont align-baseline mt-5 md:mt-10 lg:mt-3 lg:pl-20 3xl:pl-28">
                        <p class="text-right font-light lg:text-center text-blue-700 text-lg md:text-2xl lg:text-3xl lg:inline tracking-tighter 3xl:text-5xl">
                            {{ $t('tech.hasta') }}
                        </p>
                        <p class="md:text-center text-blue-700 font-semibold text-2xl md:text-4xl lg:text-5xl inline tracking-tighter lg:pl-1 3xl:text-7xl 3xl:pl-3">
                            {{ $t('tech.destino') }}
                        </p>
                </span>
                
            </div>

            <div class="flex flex-col pt-8 md:pt-14 3xl:pt-16">
                <span class="flex-row justify-center mx-auto gap-x-4 antonioFont align-baseline">
                        <p class="text-gray-700 text-2xl md:text-4xl text-center tracking-wide lg:tracking-normal lg:text-xl lg:inline 3xl:text-4xl ">
                            {{ $t('tech.solucion') }}
                        </p>
                        <p class="text-gray-800 font-bold md:text-2xl lg:inline lg:ml-2 3xl:text-4xl 3xl:ml-2">
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