import { createRouter, createWebHistory, RouterView } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`../views/HomeView.vue`)
    },
    {
      path: '/component-meta',
      component: RouterView,
      redirect: '/component-meta/list',
      children: [
        {
          path: `list`,
          component: () => import(`../views/component-meta/ListView.vue`)
        },
        {
          path: `add`,
          component: () => import(`../views/component-meta/EditView.vue`)
        },
        {
          path: `edit/:id`,
          component: () => import(`../views/component-meta/EditView.vue`)
        }
      ]
    }
  ]
})

export default router
