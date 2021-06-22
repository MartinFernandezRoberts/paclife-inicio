<template>
    <div class="h-screen w-screen bg-blue-600">
        <div class="flex flex-row w-full">
            <Tech class="flex-col"
            />
            <LogoTech class="flex-col" 
            />
        </div>

    </div>
</template>

<script>

import Tech from './components/Tech'
import LogoTech from './components/LogoTech.vue'
export default {
    name: 'MainTech',
    components:{
        Tech,
        LogoTech
    }
}
</script>