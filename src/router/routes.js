
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'miproyecto', component: () => import('pages/miProyecto.vue') },
      { path: 'miconocimiento', component: () => import('pages/miConocimiento.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
