// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

import Homepage from 'src/views/Homepage.vue'
import Team from 'src/views/Team.vue'
import Contact from 'src/views/Contact.vue'
import Projects from 'src/views/Projects.vue'
import Documentation from 'src/views/Documentation.vue'
import Partnerships from 'src/views/Partnerships.vue'
import Jobs from 'src/views/Jobs.vue'
import Games from 'src/views/Games.vue'
import Statuspage from 'src/views/Statuspage.vue'
import NotFound from 'src/views/NotFound.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/documentation', component: Documentation },
  { path: '/partnerships', component: Partnerships },
  { path: '/jobs', component: Jobs },
  { path: '/games', component: Games },
  { path: '/status', component: Statuspage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router