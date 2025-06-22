<!-- src/components/Navbar.vue -->
<template>
  <nav class="w-full bg-black text-white py-3 px-6 sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="https://cdn-proxy.hoststudios.de/logo.png" alt="Logo" class="w-8 h-8" />
        <span class="text-lg font-semibold">Host Gamestudios</span>
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide">
        <li><a href="#home" class="hover:text-orange-400">Start</a></li>
        <li><a href="#services" class="hover:text-orange-400">Services</a></li>
        <li><a href="#team" class="hover:text-orange-400">Team</a></li>
        <li><a href="#kontakt" class="hover:text-orange-400">Kontakt</a></li>
        <li>
          <a href="https://seriuxmod.hoststudios.de" target="_blank" class="hover:text-orange-400">
            Seriuxmod ↗
          </a>
        </li>
      </ul>

      <!-- Rechts: CTA Button -->
      <div class="flex items-center gap-4">
        <button class="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
          Jetzt Spielen
        </button>
      </div>
    </div>
  </nav>
</template>
