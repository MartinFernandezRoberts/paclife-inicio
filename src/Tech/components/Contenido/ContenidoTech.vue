<template>
    <div class="static h-full my-auto items-center flex">
        <div class="w-full mx-auto z-30 -mt-36 md:-mt-64 md:pt-2 lg:-mt-48 3xl:-mt-80 3xl:pt-16 4xl:-mt-96 ">
             <div class="flex flex-col 4xl:-mt-96 ">
                <span class="flex-row mx-auto gap-x-4 antonioFont text-center -space-y-1 ">
                        <p class=" text-blue font-bold text-lg md:text-4xl lg:text-2xl 3xl:text-5xl 4xl:text-8xl">
                            {{ $t('tech.inocuidad') }}
                        </p>
                        <p class="text-blue font-bold text-lg md:text-4xl lg:text-2xl 3xl:text-5xl 4xl:text-8xl">
                            {{ $t('tech.seguridad') }}
                        </p>
                        <p class=" text-blue text-xs md:text-2xl lg:text-base font-light 3xl:text-3xl 4xl:text-7xl">
                            {{ $t('tech.cons') }}
                        </p>
                        <p class="text-base md:text-3xl lg:text-xl 3xl:text-4xl 4xl:text-8xl">
                            {{ $t('tech.garant') }}
                        </p>
                </span>

            </div>
            <div class="flex flex-col pt-9 md:pt-8 lg:pt-8 3xl:pt-20 4xl:pt-40">
                <span class="flex-row justify-center mx-auto bansFont align-baseline lg:pr-32 3xl:pr-48 4xl:mt-10 4xl:pr-96">
                        <p class=" text-blue text-lg mr-20 md:mr-60 lg:mr-2 md:text-3xl lg:text-3xl lg:inline tracking-tighter font-light 3xl:text-6xl 4xl:text-8xl">
                            {{ $t('tech.desde') }}
                        </p>
                        <p class="text-blue font-semibold tracking-tighter text-2xl md:text-5xl lg:text-5xl lg:inline lg:pl-1 3xl:text-8xl 3xl:pl-3 4xl:text-9xl">
                            {{ $t('tech.cosecha') }}
                        </p>
                </span>
                <span class=" flex-row justify-center mx-auto bansFont align-baseline mt-2 md:mt-4 lg:mt-1 lg:pl-24 3xl:pl-32 4xl:pl-96 4xl:mt-24">
                        <p class="text-right font-light lg:text-center text-blue text-lg md:text-3xl lg:text-3xl lg:inline tracking-tighter 3xl:text-6xl 4xl:text-8xl">
                            {{ $t('tech.hasta') }}
                        </p>
                        <p class="ml-10 md:ml-24 lg:ml-2 md:text-center text-blue font-semibold text-2xl md:text-5xl lg:text-5xl inline tracking-tighter lg:pl-1 3xl:text-8xl 3xl:pl-3 4xl:text-9xl">
                            {{ $t('tech.destino') }}
                        </p>
                </span>
                
            </div>

            <div class="flex flex-col pt-12 md:pt-14 lg:pt-6 3xl:pt-16 4xl:pt-36">
                <span class="flex-row justify-center mx-auto gap-x-4 antonioFont align-baseline">
                        <p class="text-gray-700 text-2xl md:text-4xl text-center tracking-wide lg:tracking-normal lg:text-xl lg:inline 3xl:text-5xl 4xl:text-8xl">
                            {{ $t('tech.solucion') }}
                        </p>
                        <p class="text-gray-800 font-bold md:text-2xl lg:inline lg:ml-2 3xl:text-5xl 3xl:ml-2 4xl:text-8xl">
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