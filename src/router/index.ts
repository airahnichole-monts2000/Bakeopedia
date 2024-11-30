import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegPage from '../views/RegPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      // Reset state or perform any necessary cleanup before entering the page
      next();
    }
  },
  {
    path: '/register',
    component: RegPage,
    beforeEnter: (to, from, next) => {
      // Reset state or perform any necessary cleanup before entering the page
      next();
    }
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  // Scroll to the top of the page when navigating between pages
  window.scrollTo(0, 0);
});

export default router;
