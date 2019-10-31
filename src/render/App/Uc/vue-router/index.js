import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      components: require('../app.vue'),
    },
  ],
});
export default router;
