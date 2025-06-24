<script setup>
import { ref } from 'vue'

// Modal öffnen/schließen
const showForm = ref(false)
const formData = ref({
  name: '',
  email: '',
  rolle: '',
  motivation: '',
})

function submitForm() {
  // Du kannst hier später eine API-Anfrage einbauen
  alert('Bewerbung abgeschickt! (Demo)')
  showForm.value = false
  formData.value = { name: '', email: '', rolle: '', motivation: '' }
}
</script>

<template>
  <!-- Verlaufs-Hintergrund -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-purple-700 to-black relative overflow-hidden">
    <!-- Card -->
    <div
      class="bg-black/80 rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center text-white backdrop-blur-md"
    >
      <h1 class="text-4xl font-bold mb-4">Werde Teil von Host Gamestudios!</h1>
      <p class="text-lg text-gray-300 mb-8">
        Wir suchen engagierte Leute für unser Studio – egal ob Entwickler, Artist, Community oder Management.<br />
        <span class="font-bold text-orange-300">Dein Traumjob? Bewirb dich initiativ!</span>
      </p>
      <button
        class="mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-bold text-lg shadow-lg transition"
        @click="showForm = true"
      >
        Jetzt bewerben
      </button>
    </div>

    <!-- Modal/Slide-Over für Bewerbung -->
    <transition name="fade">
      <div
        v-if="showForm"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
      >
        <div
          class="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-left"
        >
          <button
            class="absolute top-3 right-4 text-gray-400 hover:text-orange-400 text-2xl"
            @click="showForm = false"
            aria-label="Schließen"
          >&times;</button>
          <h2 class="text-2xl font-bold mb-3 text-orange-300">Initiativbewerbung</h2>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block mb-1 text-sm">Name*</label>
              <input
                type="text"
                v-model="formData.name"
                required
                class="w-full p-3 rounded bg-black/40 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <div>
              <label class="block mb-1 text-sm">E-Mail*</label>
              <input
                type="email"
                v-model="formData.email"
                required
                class="w-full p-3 rounded bg-black/40 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <div>
              <label class="block mb-1 text-sm">Gewünschte Rolle*</label>
              <input
                type="text"
                v-model="formData.rolle"
                placeholder="z.B. Entwickler, Artist, PM..."
                required
                class="w-full p-3 rounded bg-black/40 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <div>
              <label class="block mb-1 text-sm">Warum möchtest du Teil unseres Teams werden?</label>
              <textarea
                v-model="formData.motivation"
                rows="3"
                class="w-full p-3 rounded bg-black/40 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-orange-500 hover:bg-orange-600 rounded-full py-3 font-bold text-lg shadow-lg mt-2 transition"
            >
              Bewerbung abschicken
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
