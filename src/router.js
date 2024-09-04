import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import Experience from './Experience.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;