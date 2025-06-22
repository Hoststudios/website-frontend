<template>
    <div>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-orange-500 to-purple-700 text-white py-20 text-center relative">
        <img
          src="https://cdn-proxy.hoststudios.de/logo.png"
          alt="Host Gamestudios Logo"
          class="w-24 md:w-32 mx-auto mb-6 drop-shadow-lg"
        />
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Host Gamestudios</h1>
        <p class="text-lg md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Spiele mit Vision. Infrastruktur mit System.<br />
          Gegründet von Max S. am 22. Juni 2025.
        </p>
        <router-link
          to="/games"
          class="inline-block bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Unsere Spiele entdecken
        </router-link>
      </section>
  
      <!-- Mission / Über uns -->
      <section class="bg-gray-950 text-white py-16 px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Unsere Mission</h2>
          <p class="text-lg text-gray-300 mb-4">
            Wir machen nicht nur Games – wir bauen Plattform, Infrastruktur und Community für Entwickler & Spieler.
            <br>
            Projekte bis zur Ziellinie zu bringen ist schwer. Genau deshalb helfen wir Studios & Solo-Dev-Teams mit Services: Statusseiten, Auth, APIs, GeoDNS, Payment, Cluster-DBs, Backups, Analytics und mehr.
          </p>
          <router-link
            to="/projects"
            class="mt-4 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Mehr zu unseren Projekten
          </router-link>
        </div>
      </section>
  
      <!-- Spiele-Vorschau (Dummy/Slider) -->
      <section class="bg-gray-900 text-white py-16">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">Unsere Games</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center">
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
            <!-- Hier kannst du weitere Games ergänzen -->
          </div>
        </div>
      </section>
  
      <!-- Call-to-Action Kontakt -->
      <section class="bg-gradient-to-br from-purple-700 to-orange-500 text-white py-14 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-3">Bereit für das nächste Level?</h2>
        <p class="mb-6 text-lg text-white/90">Werde Teil unserer Community, kontaktiere uns oder arbeite mit uns zusammen!</p>
        <router-link
          to="/contact"
          class="bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Kontakt aufnehmen
        </router-link>
      </section>
    </div>
  </template>
  