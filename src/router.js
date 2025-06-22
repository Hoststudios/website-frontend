// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

import Homepage from './views/Homepage.vue'
import Team from './views/Team.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'
import Documentation from './views/Documentation.vue'
import Partnerships from './views/Partnerships.vue'
import Jobs from './views/Jobs.vue'
import Games from './views/Games.vue'
import Statuspage from './views/Statuspage.vue'
import NotFound from './views/NotFound.vue'

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
  history: createWebHashHistory(),
  routes
})

export default router