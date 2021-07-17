<template>
    <div class="h-screen w-screen bg-blue-200">
        <div class="flex flex-row w-full h-full">
            <IzquierdaTech 
                class="flex-col mx-auto my-auto"
                @click="$emit('volver')"
            />
            
            <Tech 
                class="flex-col mx-auto"
            />
            
            <DerechaTech
                class="flex-col mx-auto my-auto"
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