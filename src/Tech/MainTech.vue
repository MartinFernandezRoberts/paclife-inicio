<template>
    <div class="h-screen w-screen bg-blue-100">
        <div class="lg:flex lg:flex-row w-full h-full">
            <IzquierdaTech 
                class="lg:flex-col flex w-full mx-auto lg:my-auto mt-9 z-50 cursor-pointer"
                @click="$emit('volver')"
            />
            
            <Tech 
                class=" mx-auto h-full w-full cursor-pointer"
            />
            
            <DerechaTech
                class="lg:flex-col flex w-full mx-auto lg:my-auto -mt-16 z-50 cursor-pointer"
                @click="$emit('abrir')"
            />
<!--             <LogoHome class="flex-col mx-auto"
                    @click="$emit('abrir')"
            />
 -->
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