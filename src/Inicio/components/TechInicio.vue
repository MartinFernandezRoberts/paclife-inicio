<template>
    <router-link  :to="{ name: 'tech'}">
        <img class="" :src="require('../../assets/PaclifeTech/PaclifeLogoTech.svg')" />
    </router-link>
</template>

<script>
export default {
    name: "Tech"
}
</script>