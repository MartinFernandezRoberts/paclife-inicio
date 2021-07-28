<template>
    <div class="absolute w-full mx-auto z-40 top-2">
        <div class="flex flex-col ">
            <div class="flex-row mx-auto gap-x-6 inline-flex  ">
                <img class="w-6 cursor-pointer" :src="require('../assets/icons/es.png')" alt="español" />
                <img class="w-6 cursor-pointer" :src="require('../assets/icons/en.png')" alt="english" />
                <img class="w-6 cursor-pointer" :src="require('../assets/icons/ch.png')" alt="中文" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Selector"
}
</script>