<template>
    <div class="h-screen w-screen bg-blue-300">
        <div class="flex flex-row w-full items-end pt-24">
            <Tech 
                    class="flex-col mx-auto"
            />

            <LogoHome class="flex-col mx-auto"
                    @click="$emit('abrir')"
            />

        </div>

    </div>
</template>

<script>

import Tech from './components/Tech'
import LogoHome from '../Home/components/LogoHome'
export default {
    name: 'MainTech',
    components:{
        Tech,
        LogoHome
    }
}
</script>