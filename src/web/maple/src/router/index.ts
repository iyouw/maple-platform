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
      path: '/component',
      component: RouterView,
      redirect: '/component/list',
      children: [
        {
          path: `list`,
          component: () => import(`../views/component/ListView.vue`)
        },
        {
          path: `add`,
          component: () => import(`../views/component/EditView.vue`)
        },
        {
          path: `edit/:id`,
          component: () => import(`../views/component/EditView.vue`)
        }
      ]
    }
  ]
})

export default router
