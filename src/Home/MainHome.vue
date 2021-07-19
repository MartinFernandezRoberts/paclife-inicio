<template>
    <div class="h-screen w-screen bg-pink-50">
        <div class="flex flex-row w-full h-full">
            <IzquierdaHome
                class="flex-col mx-auto my-auto cursor-pointer"
                @click="$emit('volver')"
            />
            <Home 
                    class=" mx-auto h-full w-full cursor-pointer"
            />
            <DerechaHome
                class="flex-col mx-auto my-auto cursor-pointer"
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