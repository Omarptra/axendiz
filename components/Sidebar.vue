<script setup>
    const menuList = [
        { name: 'Dashboard', href: '/', icon: 'home' },
        { name: 'Feed Intake', href: '/intake', icon: 'intake' },
        { name: 'Vaccines', href: '/vaccines', icon: 'vaccine' },
        { name: 'Death', href: '/death', icon: 'death' },
        { name: 'Production', href: '/production', icon: 'production' },
        { name: 'Finance', href: '/finance', icon: 'finance' },
        { name: 'Transaction', href: '/transaction', icon: 'transaction' },
    ]

    const preview = ref(false)
    const profileImage = ref('csv_profilepict.jpg')
</script>

<template>
    <div class="sidebar-container flex flex-col gap-8 px-4 py-6">
        <div class="sidebar-header-container flex items-center gap-3">
            <NuxtImg @click="preview = true" :src="`/${profileImage}`" />
            <Transition name="blur">
                <div @click.self="preview = false" v-if="preview" class="backdrop grid">
                    <Transition name="bounce" appear>
                        <NuxtImg class="preview" :src="`/${profileImage}`" />
                    </Transition>
                    <button @click="preview = false" class="edit">Edit Profile</button>
                </div>
            </Transition>
            <div class="profile-text-wrapper flex flex-col gap-1">
                <h3>Omarputra</h3>
                <h5>omarputra31@gmail.com</h5>
            </div>
        </div>
        <div class="menu-link-container flex flex-col">
            <RouterLink class="menu-link-wrapper flex items-center gap-3 p-3" v-for="menu of menuList" :key="menu.name" :to="menu.href">
                <Icons :type="menu.icon" />
                {{ menu.name }}
            </RouterLink>
        </div>
    </div>
</template>