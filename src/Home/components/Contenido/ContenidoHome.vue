<template>
    <div class="h-5/6 my-auto items-center flex ">
    <div class="w-full mx-auto z-30 absolute ">
        <div class="flex flex-row justify-center w-60 mx-auto bg-blue-600 ">
                <div class="text-center text-white bansFont font-bold my-1 text-lg">
                    ENVASES INTELIGENTES
                    <br>
                    PARA EL HOGAR
                </div>
        </div>
        <div class="flex flex-row justify-center mx-auto mt-4">
            <div class="flex flex-col justify-center">
                    <TicketHome
                        class="h-14"
                    />
                    <TicketHome
                        class="h-14"
                    />
                    <TicketHome
                        class="h-14"
                    />
                    <TicketHome
                        class="h-14"
                    />
            </div>
            <div class="flex flex-col inkFont text-sm my-auto gap-y-4 mx-4">
                <div>
                    Alimentos frescos y protegidos
                    <br>
                    durante mucho más tiempo
                </div>
                <div>
                    Ahorra y reutiliza, evitando el
                    <br>
                    desperdicio de alimentos
                </div>
                <div>
                    Organiza tu próximo abastecimiento
                <br>
                    de fruta y verdura en 20 días
                </div>
                <div >
                    Optimiza tu espacio dentro del
                <br>
                    refrigerador
                </div>
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