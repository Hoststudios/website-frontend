<!-- src/views/Projects.vue -->
<template>
    <div class="max-w-5xl mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold text-center mb-10">Projekte & Plattformen</h1>
      <div class="space-y-10">
        <div class="bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-semibold mb-2">Seriuxmod Client</h2>
          <p class="text-gray-300 mb-4">
            Unser Flaggschiff: Ein hochmoderner Minecraft-Client mit Performance-Optimierungen, Mod-Support und stabiler Net-Struct-Infrastruktur.
          </p>
          <router-link
            to="/games"
            class="text-orange-400 font-bold hover:underline"
          >
            Zum Spiel &rarr;
          </router-link>
        </div>
        <!-- Hier weitere Projekte analog ergänzen -->
      </div>
    </div>
  </template>
  