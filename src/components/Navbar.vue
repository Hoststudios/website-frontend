<!-- src/components/Navbar.vue -->
<template>
    <nav class="bg-black text-white shadow-md sticky top-0 z-50 w-full">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <!-- Logo links -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="https://cdn-proxy.hoststudios.de/logo.jpg" alt="Host Gamestudios Logo" class="w-10 h-10" />
          <span class="text-lg font-extrabold tracking-tight">Host Gamestudios</span>
        </router-link>
        <!-- Navigation -->
        <ul class="hidden md:flex gap-8 text-sm font-semibold uppercase">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/games">Games</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li><router-link to="/jobs">Jobs</router-link></li>
          <li><router-link to="/partnerships">Partners</router-link></li>
          <li><router-link to="/status">Status</router-link></li>
          <li><router-link to="/documentation">Docs</router-link></li>
        </ul>
        <!-- Optional: CTA rechts -->
        <div class="hidden md:block">
          <router-link
            to="/games"
            class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition font-bold"
          >
            Jetzt Spielen
          </router-link>
        </div>
        <!-- Burger Menü für mobile (später, wenn gewünscht) -->
      </div>
    </nav>
  </template>
  