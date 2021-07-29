<template>
    <div class="absolute w-full mx-auto z-40 top-2">
        <div class="flex flex-col ">
            <div class="flex-row mx-auto gap-x-4 inline-flex locale-changer 3xl:gap-x-8" >
                <img class="w-6 cursor-pointer 3xl:w-8" :src="require('../assets/icons/es.png')" alt="español" @click="switchLocale('es')" />
                <img class="w-6 cursor-pointer 3xl:w-8" :src="require('../assets/icons/en.png')" alt="english" @click="switchLocale('en')" />
                <img class="w-6 cursor-pointer 3xl:w-8" :src="require('../assets/icons/ch.png')" alt="中文" @click="switchLocale('zh')"/>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "Select",
    methods: {
        switchLocale(locale){
            this.$i18n.locale = locale;
        }
    },
    watch: {
        "$i18n.locale": {
            handler(Locale){
                localStorage.setItem("Locale", Locale)
            }
        }
    }
}
</script>