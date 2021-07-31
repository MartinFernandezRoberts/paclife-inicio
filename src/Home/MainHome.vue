<template>
    <div class="h-screen w-screen bg-homeFondo">
        <div class="lg:flex lg:flex-row w-full h-full">
            <IzquierdaHome
                class="lg:flex-col flex w-full mx-auto lg:my-auto mt-9 z-50 cursor-pointer"
                @click="$emit('volver')"
            />
            <Home 
                    class=" mx-auto h-full w-full cursor-pointer"
            />
            <DerechaHome
                class="lg:flex-col flex w-full mx-auto lg:my-auto -mt-16 z-50 cursor-pointer"
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