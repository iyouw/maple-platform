import { createRouter, createWebHistory, RouterView } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/app"
    },
    {
      path: "/app",
      component: RouterView,
      redirect: "/app/list",
      children:[
        {
          path:"list",
          component: () => import(`../views/app/ListView.vue`)
        },
        {
          path:"detail",
          component: () => import(`../views/app/DetailView.vue`)
        }
      ]
    },
    {
      path: "/page/:id",
      component: () => import(`../views/page/EditView.vue`)
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
