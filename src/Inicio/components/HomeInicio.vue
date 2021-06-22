<template>
    <router-link  :to="{ name: 'home'}">
        <img class="" :src="require('../../assets/PaclifeHome/PaclifeLogoHome.svg')" />
    </router-link>
</template>

<script>
export default {
    name: "HomeInicio"
}
</script>