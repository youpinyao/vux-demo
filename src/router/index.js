import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Second from '@/components/Second';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  }, {
    path: '/second',
    name: 'Second',
    component: Second,
  }],
});

export default router;
