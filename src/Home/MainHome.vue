<template>
    <div class="h-screen w-screen bg-green-300">
        <div class="flex flex-row w-full h-full">
            <IzquierdaHome
                class="flex-col mx-auto my-auto"
                @click="$emit('volver')"
            />
            <Home 
                    class=" mx-auto h-full w-full"
            />
            <DerechaHome
                class="flex-col mx-auto my-auto"
                @click="$emit('abrir')"
            />

        </div>
    </div>
</template>

<script>
import Home from './components/Home.vue'
import DerechaHome from './components/DerechaHome.vue'
import IzquierdaHome from './components/IzquierdaHome.vue'

export default {
    name: 'MainHome',
    components:{
        Home,
        IzquierdaHome,
        DerechaHome,
    }
}
</script>