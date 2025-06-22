<!-- src/views/Statuspage.vue -->
<template>
    <div class="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 class="text-4xl font-bold mb-8">Service Status</h1>
      <p class="text-lg text-gray-300 mb-6">
        Hier findest du den aktuellen Status aller wichtigen Systeme von Host Gamestudios.
      </p>
      <!-- Beispiel: Externer Statuspage-Embed -->
      <iframe
        src="https://status.hoststudios.de/embed"
        title="Statuspage"
        class="w-full h-96 rounded-lg border-2 border-gray-800"
      ></iframe>
      <div class="mt-6 text-gray-400 text-sm">
        <p>Für mehr Details besuche unsere <a href="https://status.hoststudios.de" target="_blank" class="text-orange-400 hover:underline">vollständige Statusseite</a>.</p>
      </div>
    </div>
  </template>
  