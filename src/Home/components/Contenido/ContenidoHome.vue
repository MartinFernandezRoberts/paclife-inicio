<template>
<div class="w-ful h-full mx-auto z-30 relative">
    <div class="flex flex-row justify-center w-48 mx-auto bg-blue-700 ">
            <div class="text-center text-white">
                ENVASES INTELIGENTES
                <br>
                PARA EL HOGAR
            </div>
    </div>
    <div class="flex flex-row justify-center">
        <TicketHome
            class=" h-14"
        />
        <div>
            Alimentos frescos y protegidos
        <br>
            durante mucho más tiempo
        </div>
    </div>
    <div class="flex flex-row  justify-center">
        <TicketHome
            class=" h-14"
        />
        <div >
            Ahorra y reutiliza, evitando el
        <br>
            desperdicio de alimentos
        </div>
    </div>
    <div class="flex flex-row justify-center">
        <TicketHome
            class=" h-14"
        />
        <div >
            Organiza tu próximo avastecimiento
        <br>
            de fruta y verdura en 20 días
        </div>
    </div>
    <div class="flex flex-row  justify-center">
        <TicketHome
            class=" h-14"
        />
        <div >
            Optimiza tu espacio dentro del
        <br>
            refrigerador
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