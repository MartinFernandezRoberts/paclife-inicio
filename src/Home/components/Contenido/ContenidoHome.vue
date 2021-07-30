<template>
    <div class="h-5/6 my-auto items-center flex ">
        <div class="w-full mx-auto mt-14 md:mt-24 lg:mt-4 z-30 absolute ">
            <div class="flex flex-row justify-center w-48 md:w-72 lg:w-60 mx-auto bg-blue-600 3xl:w-96">
                    <span class="text-center tracking-tighter md:tracking-normal text-white bansFont font-bold my-1 text-sm md:text-2xl lg:text-lg 3xl:text-3xl" v-html="$t('home.int')">
                    </span>
            </div>
            <div class="flex flex-row justify-center mx-auto md:mt-10 lg:mt-4 pl-9">
                <div class="flex flex-col justify-center gap-y-4 ">
                        <TicketHome
                            class="h-7 md:h-12 lg:h-10 3xl:h-20"
                        />
                        <TicketHome
                            class="h-7 md:h-12 lg:h-10 3xl:h-20"
                        />
                        <TicketHome
                            class="h-7 md:h-12 lg:h-10 3xl:h-20"
                        />
                        <TicketHome
                            class="h-7 md:h-12 lg:h-10 3xl:h-20"
                        />
                </div>
                <div class="flex flex-col inkFont text-xs md:text-lg lg:text-sm my-auto gap-y-3 lg:gap-y-4 mx-3 3xl:text-2xl 3xl:gap-y-7">
                    <span class="mt-3" v-html="$t('home.frescos')">
                    </span>
                    <span  v-html="$t('home.ahorra')">
                    </span>
                    <span  v-html="$t('home.organiza')">
                    </span>
                    <span  v-html="$t('home.optimiza')">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TicketHome from './TicketHome.vue'
export default {
    name: 'ContenidoHome',
    components: { 
        TicketHome
    },
}
</script>

<style scoped>
    @font-face {
        font-family: Ink;
        src: url('../../../assets/fonts/ink-free-normal.ttf');
    }
    @font-face {
        font-family: Bahns;
        src: url('../../../assets/fonts/Bahns.ttf');
    }
    
    .inkFont{
        font-family: Ink;
    }

    .bansFont{
        font-family: Bahns;
    }
</style>