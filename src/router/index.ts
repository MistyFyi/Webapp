import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/Home.vue';
import Callback from './../views/Callback.vue';
import Servers from './../views/Servers.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        title: 'MapTracker - Know when communities you love play maps you love',
        staticPage: true,
      },
    },
    {
      name: 'callback',
      path: '/callback',
      component: Callback,
      meta: {
        staticPage: false,
      },
    },
    {
      name: 'servers',
      path: '/servers',
      component: Servers,
      beforeEnter: requireAuth,
      meta: {
        title: 'MapTracker - Watched Servers',
        header: 'Servers',
        staticPage: false,
      },
    },
  ],
});

function requireAuth(to: any, from: any, next: any) {
    if (!router.app.$auth.isAuthenticated()) {
        router.app.$auth.login();
    } else {
        next();
    }
}

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;