import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      meta: { title: '台灣台復新創學會' },
    },
    {
      path: '/active',
      component: () => import('../views/ActivityRecord.vue'),
      meta: { title: '活動紀錄' },
    },
    {
      path: '/message',
      component: () => import('../views/MessageAnnouncement.vue'),
      meta: { title: '訊息公告' },
    },
    {
      path: '/manage',
      component: () => import('../views/ManageView.vue'),
      meta: { title: '管理介面' },
      children: [
        {
          path: '',
          component: () => import('../views/Manage/ManageHome.vue'),
          meta: { title: '管理介面' },
        },
        {
          path: 'board_leader',
          component: () => import('../views/Manage/BoardLeader.vue'),
          meta: { title: '管理介面' },
        },
        {
          path: 'teams/:chapters',
          component: () => import('../views/Manage/TeamsView.vue'),
          meta: { title: '組織架構' },
        },
        {
          path: 'activity/:chapters',
          component: () => import('../views/Manage/ActivityView.vue'),
          meta: { title: '活動紀錄' },
        },
        {
          path: 'news/:chapters',
          component: () => import('../views/Manage/NewsView.vue'),
          meta: { title: '最新消息' },
        },
        {
          path: 'tstar/:chapters',
          component: () => import('../views/Manage/TstarView.vue'),
          meta: { title: '台灣之星' },
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'),
      meta: { title: 'Not Found' },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title;
  return true;
});

export default router;
