<template>
<svg class="w-28 h-28 mx-auto z-10 -mt-16" viewBox="0 0 100 100" 
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision" 
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
    >
    <circle
        cx="50"
        cy="50"
        r="49"
        fill="none"
        stroke="black"
        strokeWidth="1"
    />
        <path
            id="arco-sup"
            d="M 11.5 50 A 38.5 38.5 0 1 1 88.5 50"
            fill="none"
        />
    <text class="text-xs tracking-widest " textLength="122">
        <textPath
            xlink:href="#arco-sup"
            dominantBaseline="middle"
            textLength="122"
            
        >
            {{ $t('inicio.arcoSup')}}
            
        
        </textPath>
    </text>

        <path
            id="arco-inf"
            d="M 16 75 A 40 40 0 0 0 85 75"
            fill="none"
        />
    <text class="text-xs tracking-widest" textLength="83">
        <textPath
            xlink:href="#arco-inf"
            dominantBaseline="middle"
            textLength="83"
        >
        
            
            {{ $t('inicio.arcoInf')}}
        </textPath>
    </text>

    <circle cx="12" cy="60" r="1.7" />
    <circle cx="88" cy="60" r="1.7" />

    <circle
        cx="50"
        cy="50"
        r="29.5"
        fill="none"
        stroke="black"
        strokeWidth="1"
    />

    <text
        x="30"
        y="48"
        textLength="40"
        lengthAdjust="spacingAndGlyphs"
    >
        50.344
    </text>

    <path
        d="M 29 52 L 71 52"
        stroke="black"
        strokeWidth="1"
    />
    <svg 
        class="w-28 h-28 mx-auto "
        viewBox="-1000 -1400 2500 2500"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
    >
        <path
            d="M34 189l15 13c2 1 3 4 2 6l-27 51c-14 25 11 49 26 58 15 8 37 9 59 9 1 0 3-1 4-2l36-59c1-3 4-3 6-2l12 6c2 1 4 1 6-1 1-1 2-4 1-6l-44-80c0-1-2-2-4-2l-89 1c-3 0-4 1-5 3s0 4 2 5zm5 139l53 99c10 18 44 20 63 20h63c3 0 5-3 5-5V338c0-3-2-5-5-5l-127-1c-14 0-29-1-46-10-2-1-4-1-5 1-2 1-2 4-1 5zM407 97l-19 8c-2 1-5 0-6-2l-31-48c-14-25-48-16-63-7-14 9-26 27-37 46-1 2-1 3 0 5l33 61c1 2 1 5-2 6l-11 7c-2 1-3 3-2 6 0 2 2 3 4 3l91 3c2 0 4-1 5-3l44-78c1-1 1-4-1-5-1-2-3-2-5-2zM284 32l-112-3c-21 0-39 29-49 45l-31 55c-2 2-1 5 2 6l89 52c3 2 6 1 7-2l64-109c8-13 16-25 32-35 2-1 3-3 2-5 0-2-2-4-4-4zm16 435l3-20c0-3 2-4 4-5l58-2c28 0 37-34 37-51s-11-37-21-56c-1-1-3-2-4-2l-70-2c-2 0-4-2-4-5l-1-13c0-2-1-4-3-4-3-1-5 0-6 2l-48 77c-1 2-1 4 0 5l46 77c1 2 3 3 5 3 2-1 4-2 4-4zm118-74l58-95c11-19-5-49-14-65l-32-55c-1-2-4-3-6-2l-90 52c-3 1-3 4-2 7l63 110c7 13 14 27 14 45 0 2 1 4 3 5 2 0 5 0 6-2z"
            fill="black"
        />
    </svg>
</svg>
</template>

<script>
export default {
    name: 'TextoCirculos'
}
</script>