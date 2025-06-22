<script setup>
import { useMotion } from '@vueuse/motion'
</script>

<template>
  <div>
    <!-- HERO (mit animiertem Glow und Fade-In) -->
    <section
      v-motion="{
        initial: { opacity: 0, scale: 0.96, y: 40 },
        enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, duration: 0.7 } }
      }"
      class="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-orange-600 via-purple-700 to-black text-white py-24 overflow-hidden"
    >
      <!-- Animate Glow BG -->
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-400 opacity-30 blur-3xl animate-pulse pointer-events-none"></div>
      <img
        src="https://cdn-proxy.hoststudios.de/logo.png"
        alt="Host Gamestudios Logo"
        class="w-32 md:w-40 mx-auto mb-8 drop-shadow-2xl z-10"
        loading="lazy"
      />
      <h1 class="text-4xl md:text-6xl font-extrabold drop-shadow-xl text-white mb-4 z-10">
        Host Gamestudios
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto z-10">
        Spiele mit Vision. Infrastruktur mit System.<br />
        <span class="text-orange-300 font-bold">Gegründet von Max S.</span> am 22. Juni 2025.
      </p>
      <router-link
        to="/games"
        class="z-10 inline-block bg-white text-black font-bold px-8 py-4 rounded-full shadow-xl hover:bg-orange-200 hover:scale-105 active:scale-95 transition duration-200 text-lg"
      >
        Unsere Spiele entdecken
      </router-link>
    </section>

    <!-- USP Section: 3 animierte Cards -->
    <section class="bg-black text-white py-16 px-4">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div
          v-motion="{
            initial: { opacity: 0, scale: 0.9, y: 40 },
            enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.2 } }
          }"
          class="bg-gradient-to-br from-purple-800/80 to-gray-800/90 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle></svg>
          <h2 class="text-xl font-bold mb-2">Full-Service Plattform</h2>
          <p class="text-gray-300 text-center">
            Von Games bis Backend – alles aus einer Hand. Statusseiten, Auth, Payment, Cluster-DB, CDN und Analytics individuell skalierbar.
          </p>
        </div>
        <div
          v-motion="{
            initial: { opacity: 0, scale: 0.9, y: 40 },
            enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.3 } }
          }"
          class="bg-gradient-to-br from-orange-800/80 to-gray-800/90 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <h2 class="text-xl font-bold mb-2">Team & Community Fokus</h2>
          <p class="text-gray-300 text-center">
            Wir entwickeln transparent, mit und für die Community. Echte Developer-Support-Tools und eine offene Plattform-Philosophie.
          </p>
        </div>
        <div
          v-motion="{
            initial: { opacity: 0, scale: 0.9, y: 40 },
            enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }
          }"
          class="bg-gradient-to-br from-purple-800/80 to-orange-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M8 12l2 2 4-4"></path><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle></svg>
          <h2 class="text-xl font-bold mb-2">Für Studios & Solo-Devs</h2>
          <p class="text-gray-300 text-center">
            Support für Indie-Teams & große Projekte. 5% Beteiligung beim Payment, starke Infrastruktur & Partner wie Net-Struct.
          </p>
        </div>
      </div>
    </section>

    <!-- Games Showcase (Cards einzeln animiert) -->
    <section class="bg-gray-900 text-white py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2
          v-motion="{
            initial: { opacity: 0, y: 40 },
            enter: { opacity: 1, y: 0, transition: { delay: 0.1 } }
          }"
          class="text-3xl font-bold text-center mb-10"
        >
          Unsere Games
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-motion="{
              initial: { opacity: 0, scale: 0.92, y: 20 },
              enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }
            }"
            class="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition"
          >
            <img src="https://cdn-proxy.hoststudios.de/game-seriuxmod.png" class="w-24 h-24 object-contain mb-4" />
            <h3 class="text-xl font-bold mb-2">Seriuxmod Client</h3>
            <p class="text-gray-300 mb-4 text-center">Der neue Minecraft-Client für maximale Freiheit, Stabilität und Innovation.</p>
            <router-link
              to="/projects"
              class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              Mehr erfahren
            </router-link>
          </div>
          <!-- Weitere Spiele können hier analog mit v-motion und erhöhtem delay eingefügt werden -->
        </div>
        <div class="mt-10 text-center">
          <router-link
            to="/games"
            class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-bold transition"
          >
            Alle Games anzeigen
          </router-link>
        </div>
      </div>
    </section>

    <!-- Partner und Jobs Teaser (Section mit Fade-in) -->
    <section
      v-motion="{
        initial: { opacity: 0, y: 40 },
        enter: { opacity: 1, y: 0, transition: { delay: 0.2 } }
      }"
      class="bg-gradient-to-r from-purple-900 to-orange-700 text-white py-14 text-center"
    >
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">Powered by Partners & Community</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-12 my-8">
          <div class="flex flex-col items-center">
            <img src="https://cdn-proxy.hoststudios.de/netstruct-logo.png" alt="Net-Struct" class="w-20 h-20 mb-2" />
            <span class="text-lg">Net-Struct</span>
            <a href="https://net-struct.de" target="_blank" class="text-orange-200 hover:underline text-sm">Partner besuchen</a>
          </div>
        </div>
        <div class="mt-10">
          <router-link
            to="/partnerships"
            class="bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-200 transition"
          >
            Alle Partner ansehen
          </router-link>
          <router-link
            to="/jobs"
            class="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition"
          >
            Werde Teil des Teams
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
