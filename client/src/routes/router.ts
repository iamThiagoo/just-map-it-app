import HomePage from '@/pages/HomePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router