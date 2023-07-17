export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    name: 'TaskList',
    path: '/tasks',
    component: () => import('@/views/TaskList.vue')
  },
  {
    name: 'TaskPage',
    path: '/task/:id',
    props: true,
    component: () => import('@/views/TaskPage.vue')
  },
  {
    name: 'AboutPage',
    path: '/about',
    component: () => import('@/views/AboutPage.vue'),
    children: [
      {
        name: 'AboutUs',
        path: 'us',
        component: () => import('@/views/about/UsPage.vue'),
      },
      {
        name: 'AboutYou',
        path: 'you',
        component: () => import('@/views/about/YouPage.vue'),
      },
      {
        name: 'AboutWe',
        path: 'we',
        component: () => import('@/views/about/WePage.vue'),
      }
    ]
  },
];