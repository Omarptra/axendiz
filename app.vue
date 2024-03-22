<script setup>
  const store = useGlobalStore()
</script>

<template>
  <VitePwaManifest />
  <div class="display relative overflow-hidden">
    <Transition name="slide-fade">
      <Sidebar v-show="store.sidebarOpen"/>
    </Transition>
    <div class="page-container flex flex-col py-6 gap-8 absolute top-0 overflow-y-scroll" @click="store.sidebarOpen = false" :class="{'page-scaled' : store.sidebarOpen}" >
      <Navbar />
      <NuxtPage class="page px-6"/>
    </div>
  </div>
</template>
