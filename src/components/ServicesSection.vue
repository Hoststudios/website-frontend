<!-- src/components/ServicesSection.vue -->
<template>
  <section id="services" class="bg-gray-950 text-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Unsere Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-xl transition"
        >
          <h3 class="text-orange-400 text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-white/80">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Statusseiten', description: 'Live-Monitoring und Systemübersicht für deine Projekte.' },
  { title: 'Anmeldedienste', description: 'OAuth & Identity Services für Spiele und Plattformen.' },
  { title: 'APIs', description: 'Moderne, skalierbare REST- & Realtime-Schnittstellen.' },
  { title: 'GeoDNS', description: 'Globale Serververteilung mit Standortwahl.' },
  { title: 'Bezahlungssystem', description: '5% Beteiligung am Umsatz, komplette Zahlungsabwicklung.' },
  { title: 'Cluster-Datenbanken', description: 'Multi-Region, hochverfügbar, einfach nutzbar.' },
  { title: 'Server & Hosting', description: 'Für Spiele, APIs oder Managementplattformen.' },
  { title: 'Backup-Storage', description: 'Zuverlässige Backups, Versionierung inklusive.' },
  { title: 'CDNs', description: 'Globale Bereitstellung für Assets, Texturen & Co.' },
  { title: 'Analytics-Systeme', description: 'Erkenntnisse zur Nutzung und Performance.' }
]
</script>
