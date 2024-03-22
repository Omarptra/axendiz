<script setup>
    const store = useGlobalStore()
</script>

<template>
    <div class="navbar-container flex justify-between px-6">
        <button class="sidebar-toggle-button" @click.stop="store.sidebarOpen = !store.sidebarOpen" >
            <Icons type="menu" />
        </button>
        <button class="notification-button">
            <Icons type="notification" />
        </button>
    </div>
</template>