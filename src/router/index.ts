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
          name: 'wallet',
          component: () => import('@/views/wallet.vue'),
        },
        {
          path: '/icb-trans',
          name: 'icb-transfer',
          component: () => import('@/views/icb-transfer.vue'),
        },
        {
          path: '/stacking',
          name: 'stacking',
          component: () => import('@/views/stacking.vue'),
        },
        {
          path: '/proposals',
          name: 'proposals',
          component: () => import('@/views/proposals.vue'),
        },
      ],
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import('@/views/dev/dev.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error/404.vue'),
    },
  ],
});

export default router;
