<!-- src/views/Games.vue -->
<template>
    <div class="max-w-6xl mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold text-center mb-10">Unsere Spiele</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Beispielspiel -->
        <div class="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center">
          <img src="https://cdn-proxy.hoststudios.de/game-seriuxmod.png" class="w-24 h-24 object-contain mb-4" />
          <h2 class="text-xl font-bold mb-2">Seriuxmod Client</h2>
          <p class="text-gray-300 mb-4 text-center">
            Minecraft-Client für maximale Freiheit, Stabilität und Innovation.
          </p>
          <router-link
            to="/projects"
            class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
          >
            Zum Projekt
          </router-link>
        </div>
        <!-- Hier weitere Spiele mit gleichem Schema ergänzen -->
      </div>
      <div class="mt-16 text-center text-gray-500">
        <p>Hier erscheinen in Zukunft noch mehr Spiele aus dem Hause Host Gamestudios!</p>
      </div>
    </div>
  </template>
  