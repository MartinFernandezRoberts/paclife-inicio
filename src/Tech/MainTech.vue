<template>
    <div class="h-screen w-screen bg-techFondo">
        <div class="lg:flex lg:flex-row w-full h-full">
            <IzquierdaTech 
                class="lg:flex-col flex w-full mx-auto lg:my-auto mt-9 z-50 cursor-pointer"
                @click="$emit('volver')"
            />
            
            <Tech 
                class="mx-auto flex-col flex my-auto cursor-pointer"
            />
            
            <DerechaTech
                class="lg:flex-col flex w-full mx-auto lg:my-auto -mt-16 z-50 cursor-pointer"
                @click="$emit('abrir')"
            />
        </div>

    </div>
</template>

<script>

import Tech from './components/Tech.vue'
import IzquierdaTech from './components/IzquierdaTech.vue'
import DerechaTech from './components/DerechaTech.vue'


export default {
    name: 'MainTech',
    components:{
        Tech,
        DerechaTech,
        IzquierdaTech
    }
}
</script>