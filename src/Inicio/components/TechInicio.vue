<template>
    <button
    @click="$emit('abrir')">
        <img class="" :src="require('../../assets/PaclifeTech/PaclifeLogoTech.svg')" />
    </button>
</template>

<script>
export default {
    name: "TechInicio"
}
</script>