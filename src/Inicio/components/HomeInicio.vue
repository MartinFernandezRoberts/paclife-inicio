<template>
    <button
    @click="$emit('abrir')">
        <img class="" :src="require('../../assets/PaclifeHome/PaclifeLogoHome.svg')" />
    </button>
</template>

<script>
export default {
    name: "HomeInicio"
}
</script>