import Vue from 'vue';
import Router from 'vue-router'
import Vuex from 'vuex'
import routes from './vue-router'
import stores from './vue-store/index.js'
import App from './app.vue';

Vue.use(Router)
Vue.use(Vuex)

const router = new Router({
  routes
})

console.log(stores)

const store = new Vuex.Store({
  modules: stores.modules,
  getters: stores.getters
})

// let router = new Router({
//   routes: [
//     {
//       path: '/helloworld',
//       components: require('./components/HelloWorld.vue')
//     }
//   ],
// });

Vue.config.productionTip = false;
function test(props) {
  console.log(props);
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#test');
}

export default test;