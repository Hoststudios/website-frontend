<script setup>
import { ref } from 'vue'

const jobs = [
  {
    title: "Game Designer",
    desc: "Gestalte innovative Spielkonzepte, Mechaniken und Balancing für neue Projekte.",
  },
  {
    title: "Programmierer",
    desc: "Codiere an der Engine, im Backend oder an Tools für den nächsten Spiele-Hit.",
  },
  {
    title: "Grafikdesigner / Game Artist",
    desc: "Erschaffe 2D/3D-Assets, Animationen und das visuelle Erlebnis unserer Games.",
  },
  {
    title: "Sounddesigner / Audio-Designer",
    desc: "Schaffe mit Effekten und Musik unvergessliche Klangwelten.",
  },
  {
    title: "Autoren / Writer",
    desc: "Entwickle Storylines, Dialoge und Lore – bring die Welt zum Leben.",
  },
  {
    title: "Produzent",
    desc: "Halte das Projekt auf Kurs, manage Ressourcen und sorge für den Flow.",
  },
  {
    title: "Spieletester",
    desc: "Teste neue Features, finde Bugs & hilf, die Spielerfahrung zu perfektionieren.",
  },
  {
    title: "Level Designer",
    desc: "Erschaffe Welten, Maps und spielerische Herausforderungen.",
  },
  {
    title: "Concept Artist",
    desc: "Visualisiere Ideen & Figuren – das Fundament aller Art-Richtungen.",
  },
  // MARKETING/TEAM
  {
    title: "Marketing-Manager",
    desc: "Verantworte PR, Werbekampagnen & Reichweite für unsere Titel.",
  },
  {
    title: "Community Manager",
    desc: "Interagiere mit unseren Fans und halte die Community lebendig.",
  },
  {
    title: "Übersetzer",
    desc: "Lokalisierung und Übersetzung in verschiedene Sprachen.",
  },
  {
    title: "Videospiel-Journalist",
    desc: "Berichte, analysiere und kommuniziere Entwicklungen im Studio.",
  },
  {
    title: "Vertriebsmitarbeiter",
    desc: "Platziere unsere Spiele auf Plattformen & im Handel.",
  },
  {
    title: "Mental Coach / Sportpsychologe",
    desc: "Begleite Teams im eSports, sorge für Fokus und Wohlbefinden.",
  },
  {
    title: "Ernährungsberater",
    desc: "Unterstütze Teams und Entwickler mit gesunder Ernährung.",
  },
  {
    title: "Qualitätsprüfer",
    desc: "Stelle sicher, dass unsere Produkte höchsten Standards genügen.",
  },
  {
    title: "Spielepädagoge",
    desc: "Entwickle edukative Spielinhalte für Bildung & Nachwuchs.",
  },
]

const showForm = ref(false)
const selectedJob = ref(null)

// Formular-Daten
const formData = ref({
  job: "",
  vorname: "",
  nachname: "",
  geburtstag: "",
  taetigkeit: "",
  fuehrerschein: "",
  referenzen: "",
  hobbys: "",
  ueber18: false,
  email: "",
})

function openForm(job) {
  selectedJob.value = job
  formData.value = {
    job: job.title,
    vorname: "",
    nachname: "",
    geburtstag: "",
    taetigkeit: "",
    fuehrerschein: "",
    referenzen: "",
    hobbys: "",
    ueber18: false,
    email: "",
  }
  showForm.value = true
}

function submitForm() {
  // Hier wird das Formular abgeschickt
  // (mit Formspree, Formsubmit oder eigenem Backend)
}
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-orange-600 via-purple-700 to-black py-20">
    <div class="max-w-5xl mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
        Offene Jobs bei Host Gamestudios
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <transition-group name="card-fade" tag="div">
          <div
            v-for="(job, idx) in jobs"
            :key="job.title"
            @click="openForm(job)"
            class="cursor-pointer bg-black/80 hover:bg-orange-500/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-2xl p-7 flex flex-col items-center text-center text-white shadow-lg motion-safe:animate-fade-in-up"
            style="animation-delay: calc(0.05s * var(--card-index))"
            :style="{ '--card-index': idx }"
          >
            <h2 class="text-xl font-bold mb-2">{{ job.title }}</h2>
            <p class="text-gray-300">{{ job.desc }}</p>
            <span class="mt-4 inline-block px-5 py-1 rounded-full text-xs bg-orange-500/80 text-white">Jetzt bewerben</span>
          </div>
        </transition-group>
      </div>
    </div>

    <!-- Bewerbungsformular als Modal -->
    <transition name="fade">
      <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
        <div class="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
          <button
            class="absolute top-3 right-4 text-gray-400 hover:text-orange-400 text-2xl"
            @click="showForm = false"
            aria-label="Schließen"
          >&times;</button>
          <h2 class="text-2xl font-bold mb-4 text-orange-300">Bewerbung: {{ selectedJob?.title }}</h2>
          
          <!-- >>>>> ACHTUNG: Hier jetzt FORM mit externem Service <<<<< -->
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" <!-- Hier muss DEINE Formspree-ID rein! -->
            method="POST"
            @submit="showForm = false"
            class="space-y-4"
          >
            <input type="hidden" name="Job" :value="formData.job" />

            <div class="flex gap-2">
              <div class="flex-1">
                <label class="block mb-1 text-xs">Vorname*</label>
                <input type="text" name="Vorname" v-model="formData.vorname" required class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
              </div>
              <div class="flex-1">
                <label class="block mb-1 text-xs">Nachname*</label>
                <input type="text" name="Nachname" v-model="formData.nachname" required class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
              </div>
            </div>

            <div>
              <label class="block mb-1 text-xs">Geburtstag* (TT/MM/JJJJ)</label>
              <input type="text" name="Geburtstag" v-model="formData.geburtstag" required class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
            </div>
            <div>
              <label class="block mb-1 text-xs">Bisherige Tätigkeit (Jobumfeld)</label>
              <input type="text" name="Bisherige Tätigkeit" v-model="formData.taetigkeit" class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
            </div>
            <div>
              <label class="block mb-1 text-xs">Im Besitz eines Führerscheins Klasse B?</label>
              <select name="Führerschein" v-model="formData.fuehrerschein" class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white">
                <option value="">Bitte wählen</option>
                <option>Ja</option>
                <option>Nein</option>
              </select>
            </div>
            <div>
              <label class="block mb-1 text-xs">Referenzen</label>
              <input type="text" name="Referenzen" v-model="formData.referenzen" class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
            </div>
            <div>
              <label class="block mb-1 text-xs">Hobbys</label>
              <input type="text" name="Hobbys" v-model="formData.hobbys" class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
            </div>
            <div>
              <label class="block mb-1 text-xs">E-Mail*</label>
              <input type="email" name="E-Mail" v-model="formData.email" required class="w-full p-2 rounded bg-black/30 border border-gray-700 text-white" />
            </div>
            <div>
              <label class="inline-flex items-center">
                <input type="checkbox" name="Über 18 Jahre alt" v-model="formData.ueber18" required class="mr-2" />
                Ich bin mindestens 18 Jahre alt*
              </label>
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
.card-fade-enter-active,
.card-fade-leave-active {
  transition: all .3s;
}
.card-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(.95);
}
.card-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
