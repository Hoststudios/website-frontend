// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

import Homepage from './views/Homepage.vue'
import Team from './views/Team.vue'
import Partnerships from './views/Partnerships.vue'
import Jobs from './views/Jobs.vue'
import Games from './views/Games.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/team', component: Team },
  { path: '/partnerships', component: Partnerships },
  { path: '/jobs', component: Jobs },
  { path: '/games', component: Games },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router