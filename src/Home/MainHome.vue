<template>
    <div class="h-screen w-screen bg-green-300">
        <div class="flex flex-row w-full items-end pt-24">
            <LogoTech 
                    class="flex-col mx-auto"
                    @click="$emit('abrirA')"
            />
            <Home 
                    class="flex-col bg-white mx-auto"
            />
        </div>
    </div>
</template>

<script>
import Home from './components/Home'
import LogoTech from '../Tech/components/LogoTech'
export default {
    name: 'MainHome',
    components:{
        Home,
        LogoTech
    }
}
</script>