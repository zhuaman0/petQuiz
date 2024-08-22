import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Sec from '../components/Sec.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/sec', component: Sec }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
