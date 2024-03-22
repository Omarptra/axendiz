<script setup>
    const store = useGlobalStore()

    const categories = [
        { name: 'intake', image: 'sack' },
        { name: 'vaccine', image: 'vaccine' },
        { name: 'death', image: 'skull' },
        { name: 'production', image: 'eggs' },
        { name: 'wallet', image: 'wallet' },
        { name: 'transaction', image: 'money' },
    ]

    const isActive = ref('intake')
</script>

<template>
    <div class="dashboard-page flex flex-col gap-8">
        <div class="header-container flex flex-col gap-2 px-6">
            <h3>Good Morning, <span>Omarputra!</span></h3>
            <div class="text-wrapper">
                <h2>Manage Your</h2>
                <h2>Business Easily.</h2>
            </div>
        </div>
        <div class="categories-slider-container flex flex-col gap-4 ">
            <h3 class="px-6">Categories</h3>
            <div class="categories-slider-wrapper overflow-x-scroll pb-4 px-6">
                <div class="categories-slider flex gap-4">
                    <div class="category-wrapper p-3" v-for="category of categories" @click="isActive = category.name" :class="{'cat-active' : category.name === isActive}" :key="category.name">
                        <NuxtImg :src="`${category.image}.png`" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>