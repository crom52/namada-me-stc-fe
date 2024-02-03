import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/layouts/main-layout/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'main-home',
          component: () => import('@/views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import('@/views/dev/dev.vue'),
    },
  ],
});

export default router;
