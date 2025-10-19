// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'

import Homepage from './views/Homepage.vue'
import Team from './views/Team.vue'
import Jobs from './views/Jobs.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/team', component: Team },
  { path: '/jobs', component: Jobs },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router