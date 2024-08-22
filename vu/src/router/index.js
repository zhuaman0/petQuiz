// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Sec from '../components/Sec.vue';

const routes = [
	{ path: '/', component: App },
	{ path: '/sec', component: Sec }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
