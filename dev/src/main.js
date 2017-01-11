// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Lists from 'components/Lists';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'lists',
  component: Lists
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  hashbang: false,
  history: true,
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});