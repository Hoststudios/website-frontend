<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="w-full bg-black/90 border-b border-black/30 fixed top-0 left-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <router-link to="/" class="flex items-center gap-3">
        <img src="https://cdn-proxy.hoststudios.de/logo.png" alt="Host Gamestudios Logo" class="w-10" />
        <span class="font-bold text-xl text-white">Host Gamestudios</span>
      </router-link>
      <ul class="flex gap-4 items-center ml-8">
        <li v-for="nav in navLinks" :key="nav.to">
          <router-link
            :to="nav.to"
            class="px-4 py-2 rounded-lg font-semibold transition-all"
            :class="route.path.startsWith(nav.to) && nav.to !== '/' ? 'bg-orange-500 text-white shadow' : 
                    route.path === nav.to ? 'bg-orange-500 text-white shadow' : 'text-white hover:bg-gray-800/70'}"
          >
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="h-20"></div>
</template>

<script setup>
const navLinks = [
  { name: "Home", to: "/" },
  { name: "Games", to: "/games" },
  { name: "Projects", to: "/projects" },
  { name: "Team", to: "/team" },
  { name: "Jobs", to: "/jobs" },
  { name: "Status", to: "/status" },
  { name: "Docs", to: "/documentation" }
]
</script>
