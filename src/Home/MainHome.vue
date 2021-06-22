<template>
    <div class="h-screen w-screen bg-green-400">
        <div class="flex flex-row w-full ">
            <LogoHome class="flex-col"
            />
            <Home class="flex-col bg-white"
            />
        </div>
    </div>
</template>

<script>
import Home from './components/Home'
import LogoHome from './components/LogoHome'
export default {
    name: 'MainHome',
    components:{
        Home,
        LogoHome
    }
}
</script>