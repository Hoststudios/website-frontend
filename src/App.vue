<script setup>
import Navbar from './components/Navbar.vue'


import ServicesSection from './components/ServicesSection.vue'
import TeamSection from './components/TeamSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <section class="relative bg-gradient-to-br from-orange-500 to-purple-700 text-white py-20 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <img
        src="https://cdn-proxy.hoststudios.de/logo.png"
        alt="Host Gamestudios Logo"
        class="w-24 mx-auto mb-6 drop-shadow-lg"
      />
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Host Gamestudios</h1>
      <p class="text-lg md:text-xl text-white/90 mb-8">
        Spiele mit Vision. Infrastruktur mit System.<br />
        Gegründet von Max S. am 22. Juni 2025.
      </p>
      <a
        href="#services"
        class="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Unsere Services ansehen
      </a>
    </div>
  </section>
</template>
