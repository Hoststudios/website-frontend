<script setup>
import { useMotion } from '@vueuse/motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <!-- Main -->
    <section id="main" v-motion="{initial: { opacity: 0, scale: 0.96, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, duration: 0.7 } }}" class="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-orange-600 via-purple-700 to-black text-white py-24 overflow-hidden">
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-400 opacity-30 blur-3xl animate-pulse pointer-events-none"></div>
      <img src="https://cdn-proxy.hoststudios.de/logo_large.png" alt="Host Gamestudios Logo" class="w-32 md:w-40 mx-auto mb-8 drop-shadow-2xl z-10" loading="lazy"/>
      <h1 class="text-4xl md:text-6xl font-extrabold drop-shadow-xl text-white mb-4 z-10">Host Gamestudios</h1>
      <p class="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto z-10">Spiele mit Vision. Infrastruktur mit System.
        <br/>
        <span class="text-orange-600 font-bold">Gegründet von Max S. </span>am 22. Juni 2025.
      </p>
      <button @click="scrollToId('projekte')" class="z-10 inline-block bg-white text-black font-bold px-8 py-4 rounded-full shadow-xl hover:bg-orange-200 hover:scale-105 active:scale-95 transition duration-200 text-lg">Jezt entdecken!</button>
    </section>

    <!-- Leistung -->
    <section id="leistung" class="bg-gray-900 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-5">

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.2 } }}"
          class="bg-gradient-to-br from-purple-800/80 to-gray-800/90 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9.75 3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H9a8.25 8.25 0 108.25 8.25v-.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.75A10.5 10.5 0 119 3h.75z" /></svg>
          <h2 class="text-xl font-bold mb-2">Full-Service Plattform</h2>
          <p class="text-gray-300 text-center">Von Games bis Backend – alles aus einer Hand. Statusseiten, Auth, Payment, Cluster-DB, CDN und Analytics individuell skalierbar.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.3 } }}" class="bg-gradient-to-br from-orange-800/80 to-gray-800/90 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"d="M3 15a4 4 0 014-4h1.26A8 8 0 1120 12.5M12 20v-6m0 0l3 3m-3-3l-3 3" /></svg>
          <h2 class="text-xl font-bold mb-2">Infrastruktur & Skalierung</h2>
          <p class="text-gray-300 text-center">Automatische Skalierung für Live-Events, Seasonal Updates oder User-Spikes. Infrastruktur, die mit deinem Spiel wächst – ohne Downtime.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-purple-800/80 to-orange-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <h2 class="text-xl font-bold mb-2">Tools & Integration</h2>
          <p class="text-gray-300 text-center">Nahtlose SDKs und APIs für Unity, Unreal & Godot. Plug’n’Play-Integration in bestehende Pipelines mit Webhooks, OAuth2 und REST-Support.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-red-600/40 to-orange-700/70 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 20v-2a4 4 0 00-3-3.87M9 20v-2a4 4 0 013-3.87M7 8a4 4 0 118 0 4 4 0 11-8 0z" /></svg>
          <h2 class="text-xl font-bold mb-2">Team & Community Fokus</h2>
          <p class="text-gray-300 text-center">Roadmaps, Dev-Diaries und Community-Votings. Jeder kann Einfluss nehmen – von Feature-Wünschen bis Bugfix-Priorisierung.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-red-900/80 to-purple-600/20 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 10h8m-8 4h5m-9 2a9 9 0 1116.32 4.9L21 21l-3.1-1.78A9 9 0 014 16z" /></svg>
          <h2 class="text-xl font-bold mb-2">Feedback & Transparenz</h2>
          <p class="text-gray-300 text-center">Roadmaps, Dev-Diaries und Community-Votings. Jeder kann Einfluss nehmen – von Feature-Wünschen bis Bugfix-Priorisierung.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-purple-800/20 to-orange-800/70 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M8 12l2 2 4-4"></path><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle></svg>
          <h2 class="text-xl font-bold mb-2">Für Studios & Solo-Devs</h2>
          <p class="text-gray-300 text-center">Support für Indie-Teams & große Projekte. 5% Beteiligung beim Payment, starke Infrastruktur & Partner wie Net-Struct.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-purple-900/50 to-orange-900/50 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" stroke-width="2" /><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6m-16 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>
          <h2 class="text-xl font-bold mb-2">Monetarisierung & Fair Share</h2>
          <p class="text-gray-300 text-center">Flexible Revenue-Modelle, faire Gebührenstruktur und optionaler In-Game-Shop-Service. Du behältst die Kontrolle über Preise & Features.</p>
        </div>

        <div v-motion="{initial: { opacity: 0, scale: 0.9, y: 40 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.4 } }}" class="bg-gradient-to-br from-orange-800/80 to-gray-700/50 rounded-2xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 mb-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2" ry="2" stroke-width="2" /><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7 11V7a5 5 0 0110 0v4" /></svg>
          <h2 class="text-xl font-bold mb-2">Für Studios & Solo-Devs</h2>
          <p class="text-gray-300 text-center">DSGVO-konform, verschlüsselte Kommunikation und Self-Hosting-Optionen. Deine Daten gehören dir – keine versteckten Cloud-Abhängigkeiten.</p>
        </div>

      </div>
    </section>

    <!-- Projekte -->
    <section id="projekte" class="bg-gray-800 text-white py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 v-motion="{initial: { opacity: 0, y: 40 },enter: { opacity: 1, y: 0, transition: { delay: 0.1 } }}" class="text-3xl font-bold text-center mb-10">Unsere Projekte</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div v-motion="{initial: { opacity: 0, scale: 0.92, y: 20 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}" class="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition">
            <img src="https://cdn-proxy.hoststudios.de/img/logo_seriuxmod-client.png" class="w-24 h-24 object-contain mb-4"/>
            <h3 class="text-xl font-bold mb-2">Seriuxmod Client</h3>
            <p class="text-gray-300 mb-4 text-center">Der neue Minecraft-Client für maximale Freiheit, Stabilität und Innovation.</p>
            <a href="https://seriuxmod.net" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Mehr erfahren</a>
          </div>

          <div v-motion="{initial: { opacity: 0, scale: 0.92, y: 20 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}" class="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition">
            <img src="https://cdn-proxy.hoststudios.de/img/logo_seriux.png" class="w-24 h-24 object-contain mb-4"/>
            <h3 class="text-xl font-bold mb-2">Seriux Netzwerk</h3>
            <p class="text-gray-300 mb-4 text-center">Ein Minecraft Server mit bekannten und innovativen Spielmodus.</p>
            <a href="https://seriux.net" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Mehr erfahren</a>
          </div>
          
          <div v-motion="{initial: { opacity: 0, scale: 0.92, y: 20 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}" class="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition">
            <img src="https://cdn-proxy.hoststudios.de/img/fragezeichen.png" class="w-24 h-24 object-contain mb-4"/>
            <h3 class="text-xl font-bold mb-2">Projektunterstützung</h3>
            <p class="text-gray-300 mb-4 text-center">Dein Erfolg ist unser Ziel. Wir unterstützen dich mit Erfahrung, Leidenschaft und Innovation.</p>
            <a href="https://discord.gg/PxaDQ8C9" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Mehr erfahren</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Partner -->
    <section id="partner" v-motion="{initial: { opacity: 0, y: 40 },enter: { opacity: 1, y: 0, transition: { delay: 0.2 } }}" class="bg-gradient-to-r from-purple-900 to-orange-700 text-white py-14 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">Powered by Partners & Community</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-12 my-8">

          <div v-motion="{initial: { opacity: 0, scale: 0.92, y: 20 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}" class="bg-gray-800 rounded-2xl p-4 shadow-lg flex flex-col items-center hover:scale-105 transition">
            <img src="https://cdn-proxy.hoststudios.de/img/logo_net-struct.png" style="max-width: 100%;" class="w-20 h-20 object-contain mb-4"/>
            <h3 class="text-xl font-bold mb-2"> </h3>
            <a href="https://net-struct.de" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Partner besuchen</a>
          </div>

          <div v-motion="{initial: { opacity: 0, scale: 0.92, y: 20 },enter: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}" class="bg-gray-800 rounded-2xl p-4 shadow-lg flex flex-col items-center hover:scale-105 transition">
            <img src="https://cdn-proxy.hoststudios.de/willy_logo.png" style="max-width: 100%;" class="w-20 h-20 object-contain mb-4"/>
            <h3 class="text-xl font-bold mb-2"> </h3>
            <a href="https://tshirt-willy.de" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">Partner besuchen</a>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
