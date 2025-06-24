<!-- src/components/Footer.vue -->
<template>
    <footer class="bg-black text-white pt-14 pb-8 mt-16">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between px-4">
        <!-- Branding & Claim -->
        <div>
          <img src="https://cdn-proxy.hoststudios.de/logo_large.png" alt="Logo" class="w-14 mb-4" />
          <p class="text-2xl font-bold mb-2">Host Gamestudios</p>
          <p class="text-gray-400 mb-4">Spiele mit Vision.<br />Infrastruktur mit System.</p>
          <p class="text-gray-500 text-xs">&copy; 2025 Host Gamestudios</p>
        </div>
        <!-- Navigation -->
        <div>
          <h3 class="font-bold mb-2">Navigation</h3>
          <ul class="space-y-1">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/games">Games</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/jobs">Jobs</router-link></li>
            <li><router-link to="/partnerships">Partners</router-link></li>
            <li><router-link to="/status">Status</router-link></li>
          </ul>
        </div>
        <!-- Socials & Rechtliches -->
        <div>
          <h3 class="font-bold mb-2">Kontakt & Social</h3>
          <ul class="space-y-1">
            <li><a href="mailto:kontakt@hoststudios.de" class="hover:text-orange-400">E-Mail</a></li>
            <li><a href="https://discord.gg/deinlink" target="_blank" class="hover:text-orange-400">Discord</a></li>
            <li><a href="https://github.com/hoststudios" target="_blank" class="hover:text-orange-400">GitHub</a></li>
            <li><a href="https://twitter.com/hoststudios" target="_blank" class="hover:text-orange-400">Twitter</a></li>
          </ul>
          <div class="mt-4">
            <a href="#" class="text-xs text-gray-400 hover:text-orange-400">Impressum</a>
            <a href="#" class="text-xs text-gray-400 hover:text-orange-400">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  </template>